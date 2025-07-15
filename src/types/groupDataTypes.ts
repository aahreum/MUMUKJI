export interface menuListDataTypes {
  groupId: number
  newItem: newItemDataTypes[]
  favorite: boolean
  groupName: string
}

export interface newItemDataTypes {
  id: number
  theme: string
  menu: string
}

export interface storedGroupData {
  groupName: string
  favorite: boolean
  menu: newItemDataTypes[]
}
