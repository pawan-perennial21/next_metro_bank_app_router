export const PATH = {
  login: "/login",
  signup: "/signup",
  main: "/",
  dashboard: "/dashboard",
  summary: "/dashboard/summary",
  details: "/dashboard/details",
  editProfile: "/editProfile",
};

export const SIGN_UP_FORM_FIELDS = [
  {
    name: "fullName",
    label: "FullName",
    type: "text",
  },
  {
    name: "dateOfIncorporation",
    label: "Date of Incorporation",
    type: "date",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
  },
];

export const LOGIN_FORM_FIELDS = [
  {
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
  },
];

export const SUMMARY_INFO = [
  { title: "Account Number", value: "67238744" },
  { title: "Income", value: "$20,00,000" },
  { title: "Spends", value: "$11,00,000" },
];

export const CURRENT_SERVICES = [
  { title: "Current Account", imgPath: "/bank.svg" },
  { title: "Payroll", imgPath: "/payroll.svg" },
  { title: "Payments", imgPath: "/payment.svg" },
];

export const AVAILABLE_SERVICES = [
  { title: "Wallet", imgPath: "/wallet.svg" },
  { title: "Investments", imgPath: "/investment.svg" },
  { title: "Tax Payment", imgPath: "/tax.svg" },
  { title: "Loans", imgPath: "/payment.svg" },
];

export const DUMMY_TABLE_DATA = [
  {
    transactionId: "2011002039111",
    date: "22-09-2021",
    amount: "1,780",
    status: "Approved",
  },
  {
    transactionId: "2040100203911",
    date: "23-09-2021",
    amount: "3,410",
    status: "Approved",
  },
  {
    transactionId: "20110023491134",
    date: "24-09-2021",
    amount: "4,930",
    status: "Rejected",
  },
  {
    transactionId: "2010023491189",
    date: "25-09-2021",
    amount: "6,980",
    status: "Approved",
  },
  {
    transactionId: "2041023493183",
    date: "26-09-2021",
    amount: "7,180",
    status: "Rejected",
  },
];

export const TABLE_HEADERS = [
  "Transaction ID",
  "Date",
  "Amount",
  "Status",
  "Action",
];

export const DASHBOARD_TABS = [
  {
    className: "summary-tab",
    link: "/dashboard/summary",
    content: "Summary",
  },
  {
    className: "details-tab",
    link: "/dashboard/details",
    content: "Details",
  },
];

export const EDIT_PROFILE_FIELDS = [
  {
    name: "companyName",
    label: "Company Name",
    type: "text",
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
  },
  {
    name: "oldPassword",
    label: "Old Password",
    type: "password",
  },
  {
    name: "newPassword",
    label: "New Password",
    type: "password",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
  },
];
