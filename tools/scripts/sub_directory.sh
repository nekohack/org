bucket_name="nekohack.me"

# next export で出来る HTML から拡張子を取り除く
html_filepaths=$(find ./dist/apps/nextjs/exported/ -name "*.html" ! -path "*/index.html")
for filepath in $html_filepaths; do
  mv $filepath ${filepath%\.html}
done

aws s3 sync ./dist/apps/nextjs/exported/ s3://$bucket_name/ --delete --acl public-read

# S3 上のオブジェクトに対し Content-Type を付与する
for filepath in $html_filepaths; do
  path=${filepath#\.\/dist/apps/nextjs/exported\/}
  key=${path%\.html}

  aws s3api copy-object \
    --bucket $bucket_name \
    --copy-source $bucket_name/$key \
    --key $key \
    --metadata-directive "REPLACE" \
    --content-type "text/html" \
    --acl public-read
done

# コピー用に空の index.html を作成する
empty_index_html_directory=./dist/apps/nextjs/exported/tmp/
empty_index_html=${empty_index_html_directory}index.html
mkdir -p $empty_index_html_directory
touch $empty_index_html

# 追加する index.html のパス一覧を作成する
target_index_html_paths=()
for filepath_with_extension in $html_filepaths; do
  filepath=${filepath_with_extension%\.html}

  index_html_path=$filepath/index.html
  target_index_html_paths+=($index_html_path)
done

# Location ヘッダがついた空の index.html オブジェクトを作成する
for index_html_path in $target_index_html_paths; do
  key=${index_html_path#\.\/dist/apps/nextjs/exported\/}

  # 末尾に /index.html が存在しない URL となる
  destination=https://$bucket_name/${key%\/index.html}

  aws s3api put-object \
    --bucket $bucket_name \
    --body $empty_index_html \
    --key $key \
    --website-redirect-location $destination \
    --acl public-read
done
