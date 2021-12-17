export interface HobbyItem {
  header: string
  items: string[]
}

export const hobbies: HobbyItem[] = [
  {
    header: 'Communication',
    items: ['Twitter Spaces', 'Discord', 'Clubhouse'],
  },
  {
    header: 'Social Networking',
    items: ['Twitter', 'Instagram'],
  },
  {
    header: 'Gadget',
    items: [
      'iPhone 13 Pro Max',
      'iPhone XR Max',
      'iPhone 8 plus (not currently used)',
      'iPhone 6 plus (not currently used)',
      'iPhone 4 (not currently used)',
      'BlackBerry (not currently used)',
      'Pixel 6 Pro',
      'Pixel 3a',
      'Nikon D7300',
      'Nikon D5300 (not currently used)',
    ],
  },
  {
    header: 'Aviation',
    items: ['Japan Airlines', 'All Nippon Airways', 'Thai Airways'],
  },
]
