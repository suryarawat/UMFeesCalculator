
// element = [ name of program, [[fees dom, fees int], [endowment fees per crd, per term], [student org fees per credit, per term]]
export let programsList = new Map<string, Array<number[]>>();
programsList.set('Agricultural and Food Sciences', [[162.38, 600.7], [4.40, -1], [0.6, -1]]);
programsList.set('Agriculture Diploma', [[93.36, 357.40], [2.87, -1], [0.38, -1]]);
programsList.set('Architecture', [[147.06, 562], [-1, 37.5], [0.69, -1]]);
programsList.set('Arts', [[131.82, 503.82], [0, -1], [0.82, -1]]);
programsList.set('Education', [[143.74, 549.36], [4.03, -1], [0.66, -1]]);
programsList.set('Engineering', [[159.2, 530.82], [5.22, -1], [0.44, -1]]);
programsList.set('Environment, Earth and Resources', [[153.42, 597.66], [3, -1], [0.49, -1]]);
programsList.set('Fine Arts', [[159.72, 610.52], [0.3, -1], [0.3, -1]]);
// programsList.set('Health Sciences (Interdisciplinary Health)', [[146.86, 561.24],  [-1, -1], [0.9, -1]]);
programsList.set('Kinesiology & Recreation Management', [[152.14, 581.5], [4.74, -1], [0.73, -1]]);
programsList.set('Management - Asper School of Business', [[174.2, 655.8], [22.58, 1.25], [0.51, -1]]);
// programsList.set('Medicine (Family Social Sciences)', [[146.86, 561.24], [-1, 50], [-1, 27.88]]);
// programsList.set('Medicine (Other)', [[185.96, 724.42], [-1, 50], [-1, 27.88]]);
programsList.set('Music', [[145.72, 567.66], [2, -1], [0.45, -1]]);
programsList.set('Nursing', [[151.84, 561.72], [3.30, -1], [0.80, -1]]);
// programsList.set('Pharmacy (BSc.)', [[165.56, -1], [-1, 80], [0.68, -1]]);
// programsList.set('Rehabilitation Sciences', [[131.90, -1], [-1, -1], [-1, -1]]);
programsList.set('Science', [[153.42, 597.66], [7, -1], [0.89, -1]]);
programsList.set('Social Work', [[158.74, 587.22], [1.85, -1], [0.70, -1]]);

// export let isInternational: boolean;
// export let FSW: string;

export const healthInsInternational = [332, 664];
export const stJhonless9 = 5;
export const stJhonmore9 = 10;
export const stPaulMemb = 7;
export const stPaulEnd = 12;

export const lab1 =  35.00;
export const lab2 = 60.00;
export const lab3 = 85.00;
export const lab4 = 0;

export const sportFallFull = 62.92;
export const sportFallPart = 47.18;
export const sportWinterFull = 62.92;
export const sportWinterPart = 47.18;
export const sportSummer = 67.40;


export const regFW = 23.68;
export const regSum = 11.84;
export const libFW = 23.68;
export const libSum = 11.84;
export const studentServFW = 23.68;
export const studentServSum = 11.84;
export const upass = 0;
export const umsuHealthDental = 345;


export const studentOrgFW = 115.32;
export const studentOrgS = 5.12;

export const techFeePerCrd = 6.74;
export const techFeeMax = 101.10;



export const distPerCrd = 21.26;

export let additionalFees = new Map<string , Map<string, number[]>>();
additionalFees.set('Architecture', new Map([['Information technology fee', [233.44]]]));
additionalFees.set('Education', new Map([['Per 3 credit hours for all practicum and field work', [175.21]]]));
additionalFees.set('Fine Arts', new Map([['Studio enhancement and technology fee', [51.75, 25.87]]]));
additionalFees.set('Architecture', new Map([['Information technology fee', [233.44]]]));

//   Law
// Fee type		Per fall term
// Clinical/Exam fee	$114.00
// The Clinical/Exam fee applies to both full time and half time law students.
//
//   Pharmacy
// Fee type				Fee amount
// Clinical fieldwork fee (BSc Pharm)	$1,614.02 per Fall and Winter Term
// Clinical fieldwork fee (Pharm D)	$1,800.00 per Fall and Winter Term
// All BSc (Pharm) year 3 students will be assessed an additional course fee when registering for PHRM 3110.
//
//   Dental Hygiene
// Year of study	Clinic and lab fee	E-textbook fee	Clinical instrument fee
// Year 2			$5,562.53	$2,227.23	$7,061.84
// Year 3			$3,246.58	$2,227.23	-
//
// Dentistry (DMD)
// Year of study	Clinic and lab fee	E-textbook fee	Clinical instrument fee
// Year 1			$11,486.75	$1,422.34	$8,605.15
// Year 2			$13,107.26	$1,422.34	$4,531.51
// Year 3			$7,463.93	$1,422.34	-
// Year 4			$4,350.99	$1,422.34	-
//
// Dentistry (International Dentist Degree Program)
// Year of study	Clinic and lab fee	E-textbook fee	Clinical instrument fee
// Year 3			$12,904.52	$1,995.69	$15,024.68
// Year 4			$4,543.43	$1,995.69	-
// Year 3 		fees are assessed and in effect when IDDP students are admitted in the Summer Term.
//

//
// Coop fees
// Program of study			Fee per co-op work term
// Agriculture Diploma				$796.70
// Agricultural & Food Sciences			$796.70
// Architecture (Environmental Design)		$399.70
// Arts (Psychology)				$775.45
// Engineering					$399.70
// Environment, Earth & Resources (ENVR 3980 only)	$675.00
// Management					$825.60
// Science						$558.25
