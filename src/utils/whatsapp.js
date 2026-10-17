import { WHATSAPP_NUMBERS, GENERAL_WHATSAPP_MESSAGE } from "../data/site";

/** Build a correctly encoded wa.me link. */
export function waLink(intlNumber, message) {
  return `https://wa.me/${intlNumber}?text=${encodeURIComponent(message)}`;
}

/** Message sent from a product card's "Enquire on WhatsApp" button. */
export function productEnquiryMessage(productName) {
  return `Hello Spikenish Chemicals, I am interested in purchasing ${productName}. Please send me the available sizes and current prices.`;
}

/** Message sent from a training card's "Enquire About Training" button. */
export function trainingEnquiryMessage(programName) {
  return `Hello Spikenish Chemicals, I would like to enquire about the ${programName} training. Please send me the available details.`;
}

/** Message sent from the general floating / navigation WhatsApp buttons. */
export function generalEnquiryMessage() {
  return GENERAL_WHATSAPP_MESSAGE;
}

export { WHATSAPP_NUMBERS };
