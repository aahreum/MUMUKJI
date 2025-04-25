export interface menuListDataTypes {
  groupId: number
  newItem: newItemDataTypes
  favorite: boolean
  groupName: string
}

export interface newItemDataTypes {
  id: number
  theme: string
  menu: string
}
