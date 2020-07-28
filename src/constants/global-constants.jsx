import {
  cardTypeBuilder,
  badgeTypeBuilder,
  stepBuilder
} from '../shared/models/constantsBuilder';
import ACHAT_NEUF_LOGO from '../assets/images/ACHAT-NEUF-1.png';
import FINANCE_LOGO from '../assets/images/SOLUTIONS-CREDIT.png';

export const CARD_TYPE = {
  identity: {
    ...cardTypeBuilder('IDENTITE', '#C82832', '#FFFFFF', null)
  },
  newBuy: {
    ...cardTypeBuilder('ACHAT NEUF', '#00507C', '#FFFFFF', ACHAT_NEUF_LOGO)
  },
  finance: {
    ...cardTypeBuilder('SOLUTION CREDIT', '#3EA8CB', '#202227', FINANCE_LOGO)
  }
};

export const BADGE_TYPE = {
  vip: {
    ...badgeTypeBuilder('VIP', '#BF7703', '#BF7703')
  },
  parthenship: {
    ...badgeTypeBuilder('PARTENAIRE', '#1FB6FF', '#1FB6FF')
  }
};

export const NEW_BUY_STATE = [
  {
    ...stepBuilder('Optionné', 'OPT')
  },
  {
    ...stepBuilder('Réservé', 'CNF')
  },
  {
    ...stepBuilder('Notifié', 'NOT')
  },
  {
    ...stepBuilder('Signé notaire', 'SIG')
  },
  {
    ...stepBuilder('Livré', 'LIV')
  }
];

export const SOLUTION_STATE = [
  {
    ...stepBuilder('Nouveau dossier', 'NEW')
  },
  {
    ...stepBuilder('Prospect', 'PRO')
  },
  {
    ...stepBuilder('Dossier en instruction', 'INS')
  },
  {
    ...stepBuilder('DDP envoyée à la banque', 'DPE')
  },
  {
    ...stepBuilder('Offre émise par la banque', 'OFE')
  },
  {
    ...stepBuilder('Signature notaire', 'SNO')
  }
];
