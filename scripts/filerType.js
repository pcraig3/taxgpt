const getFiler = (filerType) => {
  switch (filerType) {
    case 'I’ve never filed before':
      return 0
    case 'I file my own taxes':
      return 1
    case 'Someone else does them for me':
      return 2
    case 'Other':
      return 3
    default:
      return 100
  }
}
return getFiler(filerType)
