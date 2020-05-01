import {Company} from "./company";
import { BarCode } from './barcode';

export class Card {
    barCode: BarCode;
    company: Company
    isDeleted: boolean = false;
    isSynched: boolean = false;
    cardId: string = "";
  }