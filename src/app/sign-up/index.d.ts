export type IndividualForm = {
	invitationCode: string;
	name: string;
	countryOfResidence: string;
	email: string;
	language: Language;
	agreement?: boolean;
};

export type CorporateForm = {
	invitationCode: string;
	institutionName: string;
	registeredCountry: string;
	businessNature?: string;
	email: string;
	intentionOfService?: string;
	language: Language;
	agreement?: boolean;
};
