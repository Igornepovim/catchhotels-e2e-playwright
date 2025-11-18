export const customer = {
    CZ: {
      firstName: 'Igor',
      lastName: 'Tester',
      email: () => `qa+${Date.now()}@example.com`,
      phone: '+420123456789',
      street: 'Testovací',
      houseNumber: '12A',
      zip: '11000',
      city: 'Praha',
    },
  
    PL: {
      firstName: 'Igor',
      lastName: 'Tester',
      email: () => `qa+${Date.now()}@example.com`,
      phone: '+48700111222',
      street: 'Testowa',
      houseNumber: '5B',
      zip: '00-100',
      city: 'Warszawa',
    },
  } as const;
  