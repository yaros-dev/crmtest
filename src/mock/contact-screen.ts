import { IContactDataOnScreen } from '../components/contact/contact';

export const contactScreenData: IContactDataOnScreen = {
  title: 'Describe your challenge 👋',
  lableData1: "I'm interested in...",
  lableData2: 'Approximately budget (USD)',
  attachLable: 'Add attachment',
  submitBtnTitle: 'Send challenge',
  interestedList: [
    { lable: 'CRM', value: 'crm' },
    { lable: 'Marketing', value: 'marketing' },
    { lable: 'Marketing Automation', value: 'marketingAutomation' },
  ],
  budgetList: [
    { lable: 'up to 1k', value: 'up1k' },
    { lable: 'up to 5k', value: 'up5k' },
    { lable: 'up to 15k', value: 'up15k' },
    { lable: 'it is up to leadell', value: 'upLeadell' },
  ],
};
