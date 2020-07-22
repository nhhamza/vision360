import {
  cardTypeBuilder,
  badgeTypeBuilder,
  stepBuilder
} from '../shared/models/constantsBuilder';
import ACHAT_NEUF_LOGO from '../assets/images/ACHAT-NEUF-1.png';

export const CARD_TYPE = {
  identity: {
    ...cardTypeBuilder('IDENTITE', '#C82832', null)
  },
  newBuy: {
    ...cardTypeBuilder('ACHAT NEUF', '#00507C', ACHAT_NEUF_LOGO)
  }
};

export const BADGE_TYPE = {
  vip: {
    ...badgeTypeBuilder('VIP', '#BF7703')
  },
  parthenship: {
    ...badgeTypeBuilder('PARTENAIRE', '#1FB6FF')
  }
};

export const NEW_BUY_STATE = [
  {
    ...stepBuilder('Optionné', 'OPT')
  },
  {
    ...stepBuilder('Réservé', 'RES')
  },
  {
    ...stepBuilder('Notifié', 'NOT')
  },
  {
    ...stepBuilder('Signé notaire', 'SIGN')
  },
  {
    ...stepBuilder('Livré', 'LIV')
  }
];
