// ng g cl shared/payment-detail --type=model
export class PaymentDetail {
  PMID: number;
  CardOwnerName: string;
  CardNumber: string;
  ExpirationDate: string;
  CVV: string;
}
