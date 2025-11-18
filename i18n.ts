export const i18n = {
  CZ: {
    //
    // ----------------------------------------------------
    // ORDER PAGE
    // ----------------------------------------------------
    //
    order: {
      pageTitle: '/objednavka',
      submit: 'Ověřit dostupnost',
      banner: 'Odkaz na hotel není z Booking.com',
      modal: 'Odkaz na hotel není z Booking.com',
      adultError: 'Počet dospělých musí být větší než nula',
      close: 'Rozumím',

      redirectPattern: /\/objednavka\/ubytovani\/[0-9a-fA-F-]{36}$/
    },

    //
    // ----------------------------------------------------
    // BOOKING DETAILS PAGE
    // ----------------------------------------------------
    //
    bookingDetails: {
      title: 'Výběr ubytování',
      continue: /Pokračovat/i,
      cannotPay: 'Pokoj není možné vybrat.',
      adultsLessThanProductsError:
        'Počet dospělých nemůže být menší než počet produktů',
      adultsLabel: 'Počet osob:',

      urlPattern: /\/objednavka\/ubytovani\/[0-9a-fA-F-]{36}$/
    },

    //
    // ----------------------------------------------------
    // CHECKOUT PAGE
    // ----------------------------------------------------
    //
    checkout: {
      title: 'Objednávkový formulář',
      submit: 'Rezervovat a zaplatit',
      successTitle: 'Objednávka úspěšně odeslána, děkujeme!',

      payment: {
        edenred: 'Benefitní karta Edenred',
        pluxee: 'Benefitní karta Pluxee',
        voucher: 'Dárkový voucher',
        transfer: 'Bankovním převodem'
      },

      voucher: {
        open: 'Vložit slevový/ dárkový poukaz',
        placeholder: 'Vložte kód poukazu',
        apply: 'Uplatnit'
      },

      // ----------------------------------------------------
      // NEW → Language-specific field labels for form filling
      // ----------------------------------------------------
      labels: {
        firstName: 'Jméno',
        lastName: 'Příjmení',
        email: 'Emailová adresa',
        phone: 'Telefonní číslo',
        street: 'Ulice',
        houseNumber: 'Číslo popisné',
        zip: 'PSČ',
        city: 'Město'
      },

      checkbox: {
        marketingPL: null
      },

      urlPattern: /\/objednavka\/rezervace\/[0-9a-fA-F-]{36}$/
    },

    //
    // ----------------------------------------------------
    // SUCCESS PAGE
    // ----------------------------------------------------
    //
    success: {
      urlPattern: /\/status\/[0-9a-fA-F-]{36}$/
    }
  },

  // ======================================================================

  PL: {
    //
    // ----------------------------------------------------
    // ORDER PAGE
    // ----------------------------------------------------
    //
    order: {
      pageTitle: '/zamowienie',
      submit: 'Sprawdź dostępność',
      banner: 'Link do hotelu nie pochodzi z booking.com',
      modal: 'Link do hotelu nie pochodzi z booking.com',
      adultError: 'Liczba dorosłych musi być większa niż zero',
      close: 'Rozumiem',

      redirectPattern: /\/zamowienie\/nocleg\/[0-9a-fA-F-]{36}$/
    },

    //
    // ----------------------------------------------------
    // BOOKING DETAILS PAGE
    // ----------------------------------------------------
    //
    bookingDetails: {
      title: 'Wybierz nocleg',
      continue: /Przejdź do danych/i,
      cannotPay: 'Wybór pokoju jest niedostępny.',
      adultsLessThanProductsError:
        'Liczba dorosłych nie może być mniejsza niż liczba produktów',
      adultsLabel: 'Liczba osób:',

      urlPattern: /\/zamowienie\/nocleg\/[0-9a-fA-F-]{36}$/
    },

    //
    // ----------------------------------------------------
    // CHECKOUT PAGE
    // ----------------------------------------------------
    //
    checkout: {
      title: 'Formularz zamówienia',
      submit: 'Zarezerwować i zapłacić',
      successTitle: 'Zamówienie zostało pomyślnie wysłane, dziękujemy!',

      payment: {
        card: 'Karta płatnicza',
        transfer: 'Przelew bankowy',
        voucher: 'Bon podarunkowy'
      },

      voucher: {
        open: 'Wprowadź kupon rabatowy / podarunkowy',
        placeholder: 'Wprowadź kod wartościowy',
        apply: 'Zastosuj'
      },

      // ----------------------------------------------------
      // NEW → Polish form labels
      // ----------------------------------------------------
      labels: {
        firstName: /Imię/i,
        lastName: /Nazwisko/i,
        email: /Adres e.?mail/i,
        phone: /Numer telefonu/i,
        street: /Ulica/i,
        houseNumber: /Numer domu/i,
        zip: /Kod pocztowy/i,
        city: /Miasto/i
      },
      

      checkbox: {
        marketingPL: /przetwarzanie danych osobowych/i
      },

      urlPattern: /\/zamowienie\/rezerwacja\/[0-9a-fA-F-]{36}$/
    },

    //
    // ----------------------------------------------------
    // SUCCESS PAGE
    // ----------------------------------------------------
    //
    success: {
      urlPattern: /\/status\/[0-9a-fA-F-]{36}$/
    }
  }
} as const;
