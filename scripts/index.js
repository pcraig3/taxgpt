const basicPersonalAmount = {
  CA: 14398,
  AB: 19369,
  BC: 11720,
  MB: 10145,
  NB: 11720,
  NL: 9803,
  NS: 11481,
  NT: 15609,
  NU: 16862,
  ON: 11141,
  PE: 11250,
  QC: 16143,
  SK: 16615,
  YT: 14398,
}

const ageAmount = {
  CA: 7898,
  AB: 5397,
  BC: 5069,
  MB: 3728,
  NB: 5282,
  NL: 6258,
  NS: 4141,
  NT: 7635,
  NU: 10764,
  ON: 5440,
  PE: 3764,
  QC: 3395,
  SK: 5061,
  YT: 7898,
}

const getAbbr = (region) => {
  switch (region) {
    case 'Alberta':
      return 'AB'
    case 'British Columbia':
      return 'BC'
    case 'Manitoba':
      return 'MB'
    case 'New Brunswick':
      return 'NB'
    case 'Newfoundland':
      return 'NL'
    case 'Northwest Territories':
      return 'NT'
    case 'Nova Scotia':
      return 'NS'
    case 'Nunavut':
      return 'NU'
    case 'Ontario':
      return 'ON'
    case 'PEI':
      return 'PE'
    case 'Quebec':
      return 'QC'
    case 'Saskatchewan':
      return 'SK'
    case 'Yukon':
      return 'YT'
    default:
      return 'CA'
  }
}

const minPersonalAmount = (region, isSenior = false) => {
  let canadaAmount = basicPersonalAmount['CA']
  let regionAmount = basicPersonalAmount[region]

  if (!region) {
    return canadaAmount
  }

  if (!regionAmount) {
    return null // TODO: maybe error?
  }

  if (isSenior) {
    canadaAmount += ageAmount['CA']
    regionAmount += ageAmount[region]
  }

  return canadaAmount < regionAmount
    ? { region: 'CA', basicPersonalAmount: canadaAmount }
    : { region, basicPersonalAmount: regionAmount }
}

const printResult = (_region, _isSenior) => {
  const { region, basicPersonalAmount } = minPersonalAmount(_region, _isSenior)
  return `If you are from ${_region}${
    _isSenior ? ' and you are over 65' : ''
  }, your lower BPA is $${basicPersonalAmount} from ${region}`
}

const situations = [
  {
    region: 'AB',
    isSenior: true,
  },
  {
    region: 'AB',
    isSenior: false,
  },
  {
    region: 'PE',
    isSenior: true,
  },
  {
    region: 'PE',
    isSenior: false,
  },
  {
    region: 'ON',
    isSenior: true,
  },
  {
    region: 'ON',
    isSenior: false,
  },
  {
    region: 'MB',
    isSenior: true,
  },
  {
    region: 'MB',
    isSenior: false,
  },
  {
    region: 'NS',
    isSenior: true,
  },
  {
    region: 'NS',
    isSenior: false,
  },
  {
    region: 'QC',
    isSenior: true,
  },
  {
    region: 'QC',
    isSenior: false,
  },
]

situations.forEach((s) => console.log(printResult(s.region, s.isSenior)))
