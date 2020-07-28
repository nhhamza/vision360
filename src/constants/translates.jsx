import LocalizedStrings from 'react-localization';

export default new LocalizedStrings({
  fr: {
    home: {
      intro:
        'Découvrez une vision de tous les contrats (IR et SIP) liés à un numéro de téléphone, une adresse email ou à un numéro de contrat.',
      wraning: 'Les contrats issus de Weasy ne sont pas disponibles',
      placeholder: 'Téléphone ou Email',
      search: 'Rechercher'
    },
    logo: {
      vision: 'Vision',
      v360: '360º'
    },
    searchResults: {
      results: 'RESULTATS POUR : '
    },
    client: {
      mobile: 'Mobile',
      fix: 'Fixe',
      email: 'Email',
      optin: {
        mobile: 'Opt-in Tel mobile',
        fix: 'Opt-in Tel fixe',
        email: 'Opt-in Email',
        profesionel: 'Opt-in Tel pro'
      },
      born: 'Né le',
      profesionel: 'Cadres et profession intellect sup',
      pro: 'Pro',
      seeMore: 'En voir plus',
      seeLess: 'Réduire'
    },
    achat: {
      title: 'Contrat de réservation nº{contractNumber} du {bookingDate}',
      program: 'Programme',
      lot: 'Lot',
      deliveryDate: 'Date de livraison',
      filial: 'Filiale',
      commercial: 'Commercial'
    },
    solution: {
      title: 'Dossier de financement nº{contractNumber} du {bookingDate}'
    }
  }
});
