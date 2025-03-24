export interface menuListDataTypes {
  groupId: number
  newItem: newItemDataTypes
  favorite: boolean
}

export interface newItemDataTypes {
  id: number
  theme: string
  menu: string
}
