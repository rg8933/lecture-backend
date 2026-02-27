export interface Lecture {
  id: string;
  title: string;
  duration: string;
  url: string;
  thumbnailUrl?: string;
}

export interface Subject {
  id: string;
  name: string;
  lectures: Lecture[];
}

export interface Year {
  id: string;
  name: string;
  subjects: Subject[];
}

export interface Platform {
  id: string;
  name: string;
  years: Year[];
}

export interface LectureDatabase {
  platforms: Platform[];
}

export const lectureDatabase: LectureDatabase = {
  "platforms": [
    {
        "id": "marrow",
        "name": "Marrow",
        "years": [
            {
                "id": "1st-year",
                "name": "1st Year",
                "subjects": [
                    {
                        "id": "biochemistry",
                        "name": "Biochemistry",
                        "lectures": [
                            {
                                "id": "23",
                                "title": "tickle-tickle-happily.mp4",
                                "duration": "0:04",
                                "url": "http://localhost:5005/stream/3113795597/23",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/23"
                            },
                            {
                                "id": "25",
                                "title": "01.How to approach  pediatrics edition 06",
                                "duration": "6:58",
                                "url": "http://localhost:5005/stream/3113795597/25",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/25"
                            },
                            {
                                "id": "26",
                                "title": "02.Normal Newborn",
                                "duration": "29:14",
                                "url": "http://localhost:5005/stream/3113795597/26",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/26"
                            },
                            {
                                "id": "27",
                                "title": "03.Routine Newborn Care",
                                "duration": "47:15",
                                "url": "http://localhost:5005/stream/3113795597/27",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/27"
                            },
                            {
                                "id": "28",
                                "title": "04.Management of LBW Babies",
                                "duration": "46:01",
                                "url": "http://localhost:5005/stream/3113795597/28",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/28"
                            },
                            {
                                "id": "29",
                                "title": "05.Neonatal Resuscitation",
                                "duration": "39:40",
                                "url": "http://localhost:5005/stream/3113795597/29",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/29"
                            },
                            {
                                "id": "30",
                                "title": "06.Infections in neonates",
                                "duration": "31:02",
                                "url": "http://localhost:5005/stream/3113795597/30",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/30"
                            },
                            {
                                "id": "31",
                                "title": "07.Birth asphyxia,HIE and neonatal seizures",
                                "duration": "37:56",
                                "url": "http://localhost:5005/stream/3113795597/31",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/31"
                            },
                            {
                                "id": "32",
                                "title": "08. NEC",
                                "duration": "21:31",
                                "url": "http://localhost:5005/stream/3113795597/32",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/32"
                            },
                            {
                                "id": "33",
                                "title": "09.Respiratory distress in newborn",
                                "duration": "68:31",
                                "url": "http://localhost:5005/stream/3113795597/33",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/33"
                            },
                            {
                                "id": "34",
                                "title": "10.Neonatal hypoglycemia and infant of diabetic mother",
                                "duration": "21:57",
                                "url": "http://localhost:5005/stream/3113795597/34",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/34"
                            },
                            {
                                "id": "35",
                                "title": "11.Neonatal jaundice",
                                "duration": "55:52",
                                "url": "http://localhost:5005/stream/3113795597/35",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/35"
                            },
                            {
                                "id": "36",
                                "title": "12.Normal Growth",
                                "duration": "53:23",
                                "url": "http://localhost:5005/stream/3113795597/36",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/36"
                            },
                            {
                                "id": "37",
                                "title": "13. Abnormalities in head size and shape",
                                "duration": "50:11",
                                "url": "http://localhost:5005/stream/3113795597/37",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/37"
                            },
                            {
                                "id": "38",
                                "title": "14. Short stature",
                                "duration": "37:07",
                                "url": "http://localhost:5005/stream/3113795597/38",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/38"
                            },
                            {
                                "id": "39",
                                "title": "15.Normal development",
                                "duration": "56:10",
                                "url": "http://localhost:5005/stream/3113795597/39",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/39"
                            },
                            {
                                "id": "40",
                                "title": "16. Disorders of development",
                                "duration": "19:02",
                                "url": "http://localhost:5005/stream/3113795597/40",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/40"
                            },
                            {
                                "id": "41",
                                "title": "17.Behavioural disorders in children",
                                "duration": "40:48",
                                "url": "http://localhost:5005/stream/3113795597/41",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/41"
                            },
                            {
                                "id": "42",
                                "title": "18. Breastfeeding",
                                "duration": "38:42",
                                "url": "http://localhost:5005/stream/3113795597/42",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/42"
                            },
                            {
                                "id": "43",
                                "title": "19. Malnutrition",
                                "duration": "71:03",
                                "url": "http://localhost:5005/stream/3113795597/43",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/43"
                            },
                            {
                                "id": "44",
                                "title": "20. Rickets and scurvy",
                                "duration": "54:04",
                                "url": "http://localhost:5005/stream/3113795597/44",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/44"
                            },
                            {
                                "id": "45",
                                "title": "21.Genetic disorders",
                                "duration": "84:37",
                                "url": "http://localhost:5005/stream/3113795597/45",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/45"
                            },
                            {
                                "id": "46",
                                "title": "22. Common childhood infections",
                                "duration": "54:15",
                                "url": "http://localhost:5005/stream/3113795597/46",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/46"
                            },
                            {
                                "id": "47",
                                "title": "23. TORCH Infections",
                                "duration": "49:32",
                                "url": "http://localhost:5005/stream/3113795597/47",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/47"
                            },
                            {
                                "id": "48",
                                "title": "24. COVID-19 in children",
                                "duration": "29:38",
                                "url": "http://localhost:5005/stream/3113795597/48",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/48"
                            },
                            {
                                "id": "49",
                                "title": "25. Gastrointestinal anomalies",
                                "duration": "49:13",
                                "url": "http://localhost:5005/stream/3113795597/49",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/49"
                            },
                            {
                                "id": "50",
                                "title": "26. Diarrhoea",
                                "duration": "37:45",
                                "url": "http://localhost:5005/stream/3113795597/50",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/50"
                            },
                            {
                                "id": "51",
                                "title": "27. Miscellaneous topics in GIT",
                                "duration": "38:49",
                                "url": "http://localhost:5005/stream/3113795597/51",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/51"
                            },
                            {
                                "id": "52",
                                "title": "28. Neonatal Cholestasis",
                                "duration": "44:38",
                                "url": "http://localhost:5005/stream/3113795597/52",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/52"
                            },
                            {
                                "id": "53",
                                "title": "29. Metabolic Liver Disorders",
                                "duration": "71:12",
                                "url": "http://localhost:5005/stream/3113795597/53",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/53"
                            },
                            {
                                "id": "54",
                                "title": "30. Upper airway disorders",
                                "duration": "22:56",
                                "url": "http://localhost:5005/stream/3113795597/54",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/54"
                            },
                            {
                                "id": "55",
                                "title": "31. Foreign body, congenital lung anomalies and asthma",
                                "duration": "50:23",
                                "url": "http://localhost:5005/stream/3113795597/55",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/55"
                            },
                            {
                                "id": "56",
                                "title": "32. Lower respiratory tract infection",
                                "duration": "35:12",
                                "url": "http://localhost:5005/stream/3113795597/56",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/56"
                            },
                            {
                                "id": "57",
                                "title": "33 . Cystic fibrosis",
                                "duration": "30:32",
                                "url": "http://localhost:5005/stream/3113795597/57",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/57"
                            },
                            {
                                "id": "58",
                                "title": "34. Fetal circulation and introduction to congenital heart disease",
                                "duration": "42:16",
                                "url": "http://localhost:5005/stream/3113795597/58",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/58"
                            },
                            {
                                "id": "59",
                                "title": "35. Acynotic congenital heart defects",
                                "duration": "74:28",
                                "url": "http://localhost:5005/stream/3113795597/59",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/59"
                            },
                            {
                                "id": "60",
                                "title": "36. Cyanotic congenital heart defects",
                                "duration": "89:48",
                                "url": "http://localhost:5005/stream/3113795597/60",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/60"
                            },
                            {
                                "id": "61",
                                "title": "37. Acute rheumatic fever",
                                "duration": "41:52",
                                "url": "http://localhost:5005/stream/3113795597/61",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/61"
                            },
                            {
                                "id": "62",
                                "title": "38. Congenital anomalies of kidney and urinary tract",
                                "duration": "54:59",
                                "url": "http://localhost:5005/stream/3113795597/62",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/62"
                            },
                            {
                                "id": "63",
                                "title": "39. Glomerulonephritis",
                                "duration": "24:08",
                                "url": "http://localhost:5005/stream/3113795597/63",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/63"
                            },
                            {
                                "id": "64",
                                "title": "40. Nephrotic syndrome",
                                "duration": "36:18",
                                "url": "http://localhost:5005/stream/3113795597/64",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/64"
                            },
                            {
                                "id": "65",
                                "title": "41. Inherited tubular disorders",
                                "duration": "21:04",
                                "url": "http://localhost:5005/stream/3113795597/65",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/65"
                            },
                            {
                                "id": "66",
                                "title": "42. Acute kidney injury and chronic kidney disease",
                                "duration": "49:40",
                                "url": "http://localhost:5005/stream/3113795597/66",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/66"
                            },
                            {
                                "id": "67",
                                "title": "43. Congenital anomalies and hydrocephalus",
                                "duration": "58:07",
                                "url": "http://localhost:5005/stream/3113795597/67",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/67"
                            },
                            {
                                "id": "68",
                                "title": "44. Seizure disorders and epilepsy",
                                "duration": "50:27",
                                "url": "http://localhost:5005/stream/3113795597/68",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/68"
                            },
                            {
                                "id": "69",
                                "title": "45. Cerebral Palsy and CNS infections",
                                "duration": "56:27",
                                "url": "http://localhost:5005/stream/3113795597/69",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/69"
                            },
                            {
                                "id": "70",
                                "title": "46. Neuromuscular Disorders",
                                "duration": "73:30",
                                "url": "http://localhost:5005/stream/3113795597/70",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/70"
                            },
                            {
                                "id": "71",
                                "title": "47. Growth hormone deficiency and hypothyroidism",
                                "duration": "43:49",
                                "url": "http://localhost:5005/stream/3113795597/71",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/71"
                            },
                            {
                                "id": "72",
                                "title": "48. Adrenal disorders",
                                "duration": "48:23",
                                "url": "http://localhost:5005/stream/3113795597/72",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/72"
                            },
                            {
                                "id": "73",
                                "title": "49. Pubertal Disorders",
                                "duration": "30:58",
                                "url": "http://localhost:5005/stream/3113795597/73",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/73"
                            },
                            {
                                "id": "74",
                                "title": "50. Hematological Melagnancies",
                                "duration": "69:33",
                                "url": "http://localhost:5005/stream/3113795597/74",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/74"
                            },
                            {
                                "id": "75",
                                "title": "51. Solid tumor in children",
                                "duration": "35:58",
                                "url": "http://localhost:5005/stream/3113795597/75",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/75"
                            },
                            {
                                "id": "76",
                                "title": "52. Rheumatic diseases of childhood",
                                "duration": "58:56",
                                "url": "http://localhost:5005/stream/3113795597/76",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/76"
                            },
                            {
                                "id": "77",
                                "title": "53. Approach to anemia in children and nutritional anemia",
                                "duration": "42:10",
                                "url": "http://localhost:5005/stream/3113795597/77",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/77"
                            },
                            {
                                "id": "78",
                                "title": "54. Congenital anomalies and hydrocephalus",
                                "duration": "51:11",
                                "url": "http://localhost:5005/stream/3113795597/78",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/78"
                            },
                            {
                                "id": "79",
                                "title": "55. Bleeding disorders",
                                "duration": "20:47",
                                "url": "http://localhost:5005/stream/3113795597/79",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/79"
                            },
                            {
                                "id": "80",
                                "title": "56. Shock",
                                "duration": "20:26",
                                "url": "http://localhost:5005/stream/3113795597/80",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/80"
                            },
                            {
                                "id": "81",
                                "title": "57. PALS Guidelines",
                                "duration": "53:50",
                                "url": "http://localhost:5005/stream/3113795597/81",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/81"
                            },
                            {
                                "id": "82",
                                "title": "paedia ed6 @marrowedition6notes .pdf",
                                "duration": "0:00",
                                "url": "http://localhost:5005/stream/3113795597/82",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/82"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "2nd-year",
                "name": "2nd Year",
                "subjects": [
                    {
                        "id": "pathology",
                        "name": "Pathology",
                        "lectures": [
                            {
                                "id": "23",
                                "title": "tickle-tickle-happily.mp4",
                                "duration": "0:04",
                                "url": "http://localhost:5005/stream/3113795597/23",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/23"
                            },
                            {
                                "id": "25",
                                "title": "01.How to approach  pediatrics edition 06",
                                "duration": "6:58",
                                "url": "http://localhost:5005/stream/3113795597/25",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/25"
                            },
                            {
                                "id": "26",
                                "title": "02.Normal Newborn",
                                "duration": "29:14",
                                "url": "http://localhost:5005/stream/3113795597/26",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/26"
                            },
                            {
                                "id": "27",
                                "title": "03.Routine Newborn Care",
                                "duration": "47:15",
                                "url": "http://localhost:5005/stream/3113795597/27",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/27"
                            },
                            {
                                "id": "28",
                                "title": "04.Management of LBW Babies",
                                "duration": "46:01",
                                "url": "http://localhost:5005/stream/3113795597/28",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/28"
                            },
                            {
                                "id": "29",
                                "title": "05.Neonatal Resuscitation",
                                "duration": "39:40",
                                "url": "http://localhost:5005/stream/3113795597/29",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/29"
                            },
                            {
                                "id": "30",
                                "title": "06.Infections in neonates",
                                "duration": "31:02",
                                "url": "http://localhost:5005/stream/3113795597/30",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/30"
                            },
                            {
                                "id": "31",
                                "title": "07.Birth asphyxia,HIE and neonatal seizures",
                                "duration": "37:56",
                                "url": "http://localhost:5005/stream/3113795597/31",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/31"
                            },
                            {
                                "id": "32",
                                "title": "08. NEC",
                                "duration": "21:31",
                                "url": "http://localhost:5005/stream/3113795597/32",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/32"
                            },
                            {
                                "id": "33",
                                "title": "09.Respiratory distress in newborn",
                                "duration": "68:31",
                                "url": "http://localhost:5005/stream/3113795597/33",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/33"
                            },
                            {
                                "id": "34",
                                "title": "10.Neonatal hypoglycemia and infant of diabetic mother",
                                "duration": "21:57",
                                "url": "http://localhost:5005/stream/3113795597/34",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/34"
                            },
                            {
                                "id": "35",
                                "title": "11.Neonatal jaundice",
                                "duration": "55:52",
                                "url": "http://localhost:5005/stream/3113795597/35",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/35"
                            },
                            {
                                "id": "36",
                                "title": "12.Normal Growth",
                                "duration": "53:23",
                                "url": "http://localhost:5005/stream/3113795597/36",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/36"
                            },
                            {
                                "id": "37",
                                "title": "13. Abnormalities in head size and shape",
                                "duration": "50:11",
                                "url": "http://localhost:5005/stream/3113795597/37",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/37"
                            },
                            {
                                "id": "38",
                                "title": "14. Short stature",
                                "duration": "37:07",
                                "url": "http://localhost:5005/stream/3113795597/38",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/38"
                            },
                            {
                                "id": "39",
                                "title": "15.Normal development",
                                "duration": "56:10",
                                "url": "http://localhost:5005/stream/3113795597/39",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/39"
                            },
                            {
                                "id": "40",
                                "title": "16. Disorders of development",
                                "duration": "19:02",
                                "url": "http://localhost:5005/stream/3113795597/40",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/40"
                            },
                            {
                                "id": "41",
                                "title": "17.Behavioural disorders in children",
                                "duration": "40:48",
                                "url": "http://localhost:5005/stream/3113795597/41",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/41"
                            },
                            {
                                "id": "42",
                                "title": "18. Breastfeeding",
                                "duration": "38:42",
                                "url": "http://localhost:5005/stream/3113795597/42",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/42"
                            },
                            {
                                "id": "43",
                                "title": "19. Malnutrition",
                                "duration": "71:03",
                                "url": "http://localhost:5005/stream/3113795597/43",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/43"
                            },
                            {
                                "id": "44",
                                "title": "20. Rickets and scurvy",
                                "duration": "54:04",
                                "url": "http://localhost:5005/stream/3113795597/44",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/44"
                            },
                            {
                                "id": "45",
                                "title": "21.Genetic disorders",
                                "duration": "84:37",
                                "url": "http://localhost:5005/stream/3113795597/45",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/45"
                            },
                            {
                                "id": "46",
                                "title": "22. Common childhood infections",
                                "duration": "54:15",
                                "url": "http://localhost:5005/stream/3113795597/46",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/46"
                            },
                            {
                                "id": "47",
                                "title": "23. TORCH Infections",
                                "duration": "49:32",
                                "url": "http://localhost:5005/stream/3113795597/47",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/47"
                            },
                            {
                                "id": "48",
                                "title": "24. COVID-19 in children",
                                "duration": "29:38",
                                "url": "http://localhost:5005/stream/3113795597/48",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/48"
                            },
                            {
                                "id": "49",
                                "title": "25. Gastrointestinal anomalies",
                                "duration": "49:13",
                                "url": "http://localhost:5005/stream/3113795597/49",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/49"
                            },
                            {
                                "id": "50",
                                "title": "26. Diarrhoea",
                                "duration": "37:45",
                                "url": "http://localhost:5005/stream/3113795597/50",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/50"
                            },
                            {
                                "id": "51",
                                "title": "27. Miscellaneous topics in GIT",
                                "duration": "38:49",
                                "url": "http://localhost:5005/stream/3113795597/51",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/51"
                            },
                            {
                                "id": "52",
                                "title": "28. Neonatal Cholestasis",
                                "duration": "44:38",
                                "url": "http://localhost:5005/stream/3113795597/52",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/52"
                            },
                            {
                                "id": "53",
                                "title": "29. Metabolic Liver Disorders",
                                "duration": "71:12",
                                "url": "http://localhost:5005/stream/3113795597/53",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/53"
                            },
                            {
                                "id": "54",
                                "title": "30. Upper airway disorders",
                                "duration": "22:56",
                                "url": "http://localhost:5005/stream/3113795597/54",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/54"
                            },
                            {
                                "id": "55",
                                "title": "31. Foreign body, congenital lung anomalies and asthma",
                                "duration": "50:23",
                                "url": "http://localhost:5005/stream/3113795597/55",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/55"
                            },
                            {
                                "id": "56",
                                "title": "32. Lower respiratory tract infection",
                                "duration": "35:12",
                                "url": "http://localhost:5005/stream/3113795597/56",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/56"
                            },
                            {
                                "id": "57",
                                "title": "33 . Cystic fibrosis",
                                "duration": "30:32",
                                "url": "http://localhost:5005/stream/3113795597/57",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/57"
                            },
                            {
                                "id": "58",
                                "title": "34. Fetal circulation and introduction to congenital heart disease",
                                "duration": "42:16",
                                "url": "http://localhost:5005/stream/3113795597/58",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/58"
                            },
                            {
                                "id": "59",
                                "title": "35. Acynotic congenital heart defects",
                                "duration": "74:28",
                                "url": "http://localhost:5005/stream/3113795597/59",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/59"
                            },
                            {
                                "id": "60",
                                "title": "36. Cyanotic congenital heart defects",
                                "duration": "89:48",
                                "url": "http://localhost:5005/stream/3113795597/60",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/60"
                            },
                            {
                                "id": "61",
                                "title": "37. Acute rheumatic fever",
                                "duration": "41:52",
                                "url": "http://localhost:5005/stream/3113795597/61",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/61"
                            },
                            {
                                "id": "62",
                                "title": "38. Congenital anomalies of kidney and urinary tract",
                                "duration": "54:59",
                                "url": "http://localhost:5005/stream/3113795597/62",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/62"
                            },
                            {
                                "id": "63",
                                "title": "39. Glomerulonephritis",
                                "duration": "24:08",
                                "url": "http://localhost:5005/stream/3113795597/63",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/63"
                            },
                            {
                                "id": "64",
                                "title": "40. Nephrotic syndrome",
                                "duration": "36:18",
                                "url": "http://localhost:5005/stream/3113795597/64",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/64"
                            },
                            {
                                "id": "65",
                                "title": "41. Inherited tubular disorders",
                                "duration": "21:04",
                                "url": "http://localhost:5005/stream/3113795597/65",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/65"
                            },
                            {
                                "id": "66",
                                "title": "42. Acute kidney injury and chronic kidney disease",
                                "duration": "49:40",
                                "url": "http://localhost:5005/stream/3113795597/66",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/66"
                            },
                            {
                                "id": "67",
                                "title": "43. Congenital anomalies and hydrocephalus",
                                "duration": "58:07",
                                "url": "http://localhost:5005/stream/3113795597/67",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/67"
                            },
                            {
                                "id": "68",
                                "title": "44. Seizure disorders and epilepsy",
                                "duration": "50:27",
                                "url": "http://localhost:5005/stream/3113795597/68",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/68"
                            },
                            {
                                "id": "69",
                                "title": "45. Cerebral Palsy and CNS infections",
                                "duration": "56:27",
                                "url": "http://localhost:5005/stream/3113795597/69",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/69"
                            },
                            {
                                "id": "70",
                                "title": "46. Neuromuscular Disorders",
                                "duration": "73:30",
                                "url": "http://localhost:5005/stream/3113795597/70",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/70"
                            },
                            {
                                "id": "71",
                                "title": "47. Growth hormone deficiency and hypothyroidism",
                                "duration": "43:49",
                                "url": "http://localhost:5005/stream/3113795597/71",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/71"
                            },
                            {
                                "id": "72",
                                "title": "48. Adrenal disorders",
                                "duration": "48:23",
                                "url": "http://localhost:5005/stream/3113795597/72",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/72"
                            },
                            {
                                "id": "73",
                                "title": "49. Pubertal Disorders",
                                "duration": "30:58",
                                "url": "http://localhost:5005/stream/3113795597/73",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/73"
                            },
                            {
                                "id": "74",
                                "title": "50. Hematological Melagnancies",
                                "duration": "69:33",
                                "url": "http://localhost:5005/stream/3113795597/74",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/74"
                            },
                            {
                                "id": "75",
                                "title": "51. Solid tumor in children",
                                "duration": "35:58",
                                "url": "http://localhost:5005/stream/3113795597/75",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/75"
                            },
                            {
                                "id": "76",
                                "title": "52. Rheumatic diseases of childhood",
                                "duration": "58:56",
                                "url": "http://localhost:5005/stream/3113795597/76",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/76"
                            },
                            {
                                "id": "77",
                                "title": "53. Approach to anemia in children and nutritional anemia",
                                "duration": "42:10",
                                "url": "http://localhost:5005/stream/3113795597/77",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/77"
                            },
                            {
                                "id": "78",
                                "title": "54. Congenital anomalies and hydrocephalus",
                                "duration": "51:11",
                                "url": "http://localhost:5005/stream/3113795597/78",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/78"
                            },
                            {
                                "id": "79",
                                "title": "55. Bleeding disorders",
                                "duration": "20:47",
                                "url": "http://localhost:5005/stream/3113795597/79",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/79"
                            },
                            {
                                "id": "80",
                                "title": "56. Shock",
                                "duration": "20:26",
                                "url": "http://localhost:5005/stream/3113795597/80",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/80"
                            },
                            {
                                "id": "81",
                                "title": "57. PALS Guidelines",
                                "duration": "53:50",
                                "url": "http://localhost:5005/stream/3113795597/81",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/81"
                            },
                            {
                                "id": "82",
                                "title": "paedia ed6 @marrowedition6notes .pdf",
                                "duration": "0:00",
                                "url": "http://localhost:5005/stream/3113795597/82",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/82"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "3rd-year",
                "name": "3rd Year",
                "subjects": [
                    {
                        "id": "ent",
                        "name": "ENT",
                        "lectures": [
                            {
                                "id": "23",
                                "title": "tickle-tickle-happily.mp4",
                                "duration": "0:04",
                                "url": "http://localhost:5005/stream/3113795597/23",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/23"
                            },
                            {
                                "id": "25",
                                "title": "01.How to approach  pediatrics edition 06",
                                "duration": "6:58",
                                "url": "http://localhost:5005/stream/3113795597/25",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/25"
                            },
                            {
                                "id": "26",
                                "title": "02.Normal Newborn",
                                "duration": "29:14",
                                "url": "http://localhost:5005/stream/3113795597/26",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/26"
                            },
                            {
                                "id": "27",
                                "title": "03.Routine Newborn Care",
                                "duration": "47:15",
                                "url": "http://localhost:5005/stream/3113795597/27",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/27"
                            },
                            {
                                "id": "28",
                                "title": "04.Management of LBW Babies",
                                "duration": "46:01",
                                "url": "http://localhost:5005/stream/3113795597/28",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/28"
                            },
                            {
                                "id": "29",
                                "title": "05.Neonatal Resuscitation",
                                "duration": "39:40",
                                "url": "http://localhost:5005/stream/3113795597/29",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/29"
                            },
                            {
                                "id": "30",
                                "title": "06.Infections in neonates",
                                "duration": "31:02",
                                "url": "http://localhost:5005/stream/3113795597/30",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/30"
                            },
                            {
                                "id": "31",
                                "title": "07.Birth asphyxia,HIE and neonatal seizures",
                                "duration": "37:56",
                                "url": "http://localhost:5005/stream/3113795597/31",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/31"
                            },
                            {
                                "id": "32",
                                "title": "08. NEC",
                                "duration": "21:31",
                                "url": "http://localhost:5005/stream/3113795597/32",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/32"
                            },
                            {
                                "id": "33",
                                "title": "09.Respiratory distress in newborn",
                                "duration": "68:31",
                                "url": "http://localhost:5005/stream/3113795597/33",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/33"
                            },
                            {
                                "id": "34",
                                "title": "10.Neonatal hypoglycemia and infant of diabetic mother",
                                "duration": "21:57",
                                "url": "http://localhost:5005/stream/3113795597/34",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/34"
                            },
                            {
                                "id": "35",
                                "title": "11.Neonatal jaundice",
                                "duration": "55:52",
                                "url": "http://localhost:5005/stream/3113795597/35",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/35"
                            },
                            {
                                "id": "36",
                                "title": "12.Normal Growth",
                                "duration": "53:23",
                                "url": "http://localhost:5005/stream/3113795597/36",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/36"
                            },
                            {
                                "id": "37",
                                "title": "13. Abnormalities in head size and shape",
                                "duration": "50:11",
                                "url": "http://localhost:5005/stream/3113795597/37",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/37"
                            },
                            {
                                "id": "38",
                                "title": "14. Short stature",
                                "duration": "37:07",
                                "url": "http://localhost:5005/stream/3113795597/38",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/38"
                            },
                            {
                                "id": "39",
                                "title": "15.Normal development",
                                "duration": "56:10",
                                "url": "http://localhost:5005/stream/3113795597/39",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/39"
                            },
                            {
                                "id": "40",
                                "title": "16. Disorders of development",
                                "duration": "19:02",
                                "url": "http://localhost:5005/stream/3113795597/40",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/40"
                            },
                            {
                                "id": "41",
                                "title": "17.Behavioural disorders in children",
                                "duration": "40:48",
                                "url": "http://localhost:5005/stream/3113795597/41",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/41"
                            },
                            {
                                "id": "42",
                                "title": "18. Breastfeeding",
                                "duration": "38:42",
                                "url": "http://localhost:5005/stream/3113795597/42",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/42"
                            },
                            {
                                "id": "43",
                                "title": "19. Malnutrition",
                                "duration": "71:03",
                                "url": "http://localhost:5005/stream/3113795597/43",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/43"
                            },
                            {
                                "id": "44",
                                "title": "20. Rickets and scurvy",
                                "duration": "54:04",
                                "url": "http://localhost:5005/stream/3113795597/44",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/44"
                            },
                            {
                                "id": "45",
                                "title": "21.Genetic disorders",
                                "duration": "84:37",
                                "url": "http://localhost:5005/stream/3113795597/45",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/45"
                            },
                            {
                                "id": "46",
                                "title": "22. Common childhood infections",
                                "duration": "54:15",
                                "url": "http://localhost:5005/stream/3113795597/46",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/46"
                            },
                            {
                                "id": "47",
                                "title": "23. TORCH Infections",
                                "duration": "49:32",
                                "url": "http://localhost:5005/stream/3113795597/47",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/47"
                            },
                            {
                                "id": "48",
                                "title": "24. COVID-19 in children",
                                "duration": "29:38",
                                "url": "http://localhost:5005/stream/3113795597/48",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/48"
                            },
                            {
                                "id": "49",
                                "title": "25. Gastrointestinal anomalies",
                                "duration": "49:13",
                                "url": "http://localhost:5005/stream/3113795597/49",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/49"
                            },
                            {
                                "id": "50",
                                "title": "26. Diarrhoea",
                                "duration": "37:45",
                                "url": "http://localhost:5005/stream/3113795597/50",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/50"
                            },
                            {
                                "id": "51",
                                "title": "27. Miscellaneous topics in GIT",
                                "duration": "38:49",
                                "url": "http://localhost:5005/stream/3113795597/51",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/51"
                            },
                            {
                                "id": "52",
                                "title": "28. Neonatal Cholestasis",
                                "duration": "44:38",
                                "url": "http://localhost:5005/stream/3113795597/52",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/52"
                            },
                            {
                                "id": "53",
                                "title": "29. Metabolic Liver Disorders",
                                "duration": "71:12",
                                "url": "http://localhost:5005/stream/3113795597/53",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/53"
                            },
                            {
                                "id": "54",
                                "title": "30. Upper airway disorders",
                                "duration": "22:56",
                                "url": "http://localhost:5005/stream/3113795597/54",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/54"
                            },
                            {
                                "id": "55",
                                "title": "31. Foreign body, congenital lung anomalies and asthma",
                                "duration": "50:23",
                                "url": "http://localhost:5005/stream/3113795597/55",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/55"
                            },
                            {
                                "id": "56",
                                "title": "32. Lower respiratory tract infection",
                                "duration": "35:12",
                                "url": "http://localhost:5005/stream/3113795597/56",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/56"
                            },
                            {
                                "id": "57",
                                "title": "33 . Cystic fibrosis",
                                "duration": "30:32",
                                "url": "http://localhost:5005/stream/3113795597/57",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/57"
                            },
                            {
                                "id": "58",
                                "title": "34. Fetal circulation and introduction to congenital heart disease",
                                "duration": "42:16",
                                "url": "http://localhost:5005/stream/3113795597/58",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/58"
                            },
                            {
                                "id": "59",
                                "title": "35. Acynotic congenital heart defects",
                                "duration": "74:28",
                                "url": "http://localhost:5005/stream/3113795597/59",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/59"
                            },
                            {
                                "id": "60",
                                "title": "36. Cyanotic congenital heart defects",
                                "duration": "89:48",
                                "url": "http://localhost:5005/stream/3113795597/60",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/60"
                            },
                            {
                                "id": "61",
                                "title": "37. Acute rheumatic fever",
                                "duration": "41:52",
                                "url": "http://localhost:5005/stream/3113795597/61",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/61"
                            },
                            {
                                "id": "62",
                                "title": "38. Congenital anomalies of kidney and urinary tract",
                                "duration": "54:59",
                                "url": "http://localhost:5005/stream/3113795597/62",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/62"
                            },
                            {
                                "id": "63",
                                "title": "39. Glomerulonephritis",
                                "duration": "24:08",
                                "url": "http://localhost:5005/stream/3113795597/63",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/63"
                            },
                            {
                                "id": "64",
                                "title": "40. Nephrotic syndrome",
                                "duration": "36:18",
                                "url": "http://localhost:5005/stream/3113795597/64",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/64"
                            },
                            {
                                "id": "65",
                                "title": "41. Inherited tubular disorders",
                                "duration": "21:04",
                                "url": "http://localhost:5005/stream/3113795597/65",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/65"
                            },
                            {
                                "id": "66",
                                "title": "42. Acute kidney injury and chronic kidney disease",
                                "duration": "49:40",
                                "url": "http://localhost:5005/stream/3113795597/66",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/66"
                            },
                            {
                                "id": "67",
                                "title": "43. Congenital anomalies and hydrocephalus",
                                "duration": "58:07",
                                "url": "http://localhost:5005/stream/3113795597/67",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/67"
                            },
                            {
                                "id": "68",
                                "title": "44. Seizure disorders and epilepsy",
                                "duration": "50:27",
                                "url": "http://localhost:5005/stream/3113795597/68",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/68"
                            },
                            {
                                "id": "69",
                                "title": "45. Cerebral Palsy and CNS infections",
                                "duration": "56:27",
                                "url": "http://localhost:5005/stream/3113795597/69",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/69"
                            },
                            {
                                "id": "70",
                                "title": "46. Neuromuscular Disorders",
                                "duration": "73:30",
                                "url": "http://localhost:5005/stream/3113795597/70",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/70"
                            },
                            {
                                "id": "71",
                                "title": "47. Growth hormone deficiency and hypothyroidism",
                                "duration": "43:49",
                                "url": "http://localhost:5005/stream/3113795597/71",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/71"
                            },
                            {
                                "id": "72",
                                "title": "48. Adrenal disorders",
                                "duration": "48:23",
                                "url": "http://localhost:5005/stream/3113795597/72",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/72"
                            },
                            {
                                "id": "73",
                                "title": "49. Pubertal Disorders",
                                "duration": "30:58",
                                "url": "http://localhost:5005/stream/3113795597/73",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/73"
                            },
                            {
                                "id": "74",
                                "title": "50. Hematological Melagnancies",
                                "duration": "69:33",
                                "url": "http://localhost:5005/stream/3113795597/74",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/74"
                            },
                            {
                                "id": "75",
                                "title": "51. Solid tumor in children",
                                "duration": "35:58",
                                "url": "http://localhost:5005/stream/3113795597/75",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/75"
                            },
                            {
                                "id": "76",
                                "title": "52. Rheumatic diseases of childhood",
                                "duration": "58:56",
                                "url": "http://localhost:5005/stream/3113795597/76",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/76"
                            },
                            {
                                "id": "77",
                                "title": "53. Approach to anemia in children and nutritional anemia",
                                "duration": "42:10",
                                "url": "http://localhost:5005/stream/3113795597/77",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/77"
                            },
                            {
                                "id": "78",
                                "title": "54. Congenital anomalies and hydrocephalus",
                                "duration": "51:11",
                                "url": "http://localhost:5005/stream/3113795597/78",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/78"
                            },
                            {
                                "id": "79",
                                "title": "55. Bleeding disorders",
                                "duration": "20:47",
                                "url": "http://localhost:5005/stream/3113795597/79",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/79"
                            },
                            {
                                "id": "80",
                                "title": "56. Shock",
                                "duration": "20:26",
                                "url": "http://localhost:5005/stream/3113795597/80",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/80"
                            },
                            {
                                "id": "81",
                                "title": "57. PALS Guidelines",
                                "duration": "53:50",
                                "url": "http://localhost:5005/stream/3113795597/81",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/81"
                            },
                            {
                                "id": "82",
                                "title": "paedia ed6 @marrowedition6notes .pdf",
                                "duration": "0:00",
                                "url": "http://localhost:5005/stream/3113795597/82",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/82"
                            }
                        ]
                    },
                    {
                        "id": "ophthalmology",
                        "name": "Ophthalmology",
                        "lectures": [
                            {
                                "id": "23",
                                "title": "tickle-tickle-happily.mp4",
                                "duration": "0:04",
                                "url": "http://localhost:5005/stream/3113795597/23",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/23"
                            },
                            {
                                "id": "25",
                                "title": "01.How to approach  pediatrics edition 06",
                                "duration": "6:58",
                                "url": "http://localhost:5005/stream/3113795597/25",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/25"
                            },
                            {
                                "id": "26",
                                "title": "02.Normal Newborn",
                                "duration": "29:14",
                                "url": "http://localhost:5005/stream/3113795597/26",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/26"
                            },
                            {
                                "id": "27",
                                "title": "03.Routine Newborn Care",
                                "duration": "47:15",
                                "url": "http://localhost:5005/stream/3113795597/27",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/27"
                            },
                            {
                                "id": "28",
                                "title": "04.Management of LBW Babies",
                                "duration": "46:01",
                                "url": "http://localhost:5005/stream/3113795597/28",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/28"
                            },
                            {
                                "id": "29",
                                "title": "05.Neonatal Resuscitation",
                                "duration": "39:40",
                                "url": "http://localhost:5005/stream/3113795597/29",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/29"
                            },
                            {
                                "id": "30",
                                "title": "06.Infections in neonates",
                                "duration": "31:02",
                                "url": "http://localhost:5005/stream/3113795597/30",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/30"
                            },
                            {
                                "id": "31",
                                "title": "07.Birth asphyxia,HIE and neonatal seizures",
                                "duration": "37:56",
                                "url": "http://localhost:5005/stream/3113795597/31",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/31"
                            },
                            {
                                "id": "32",
                                "title": "08. NEC",
                                "duration": "21:31",
                                "url": "http://localhost:5005/stream/3113795597/32",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/32"
                            },
                            {
                                "id": "33",
                                "title": "09.Respiratory distress in newborn",
                                "duration": "68:31",
                                "url": "http://localhost:5005/stream/3113795597/33",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/33"
                            },
                            {
                                "id": "34",
                                "title": "10.Neonatal hypoglycemia and infant of diabetic mother",
                                "duration": "21:57",
                                "url": "http://localhost:5005/stream/3113795597/34",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/34"
                            },
                            {
                                "id": "35",
                                "title": "11.Neonatal jaundice",
                                "duration": "55:52",
                                "url": "http://localhost:5005/stream/3113795597/35",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/35"
                            },
                            {
                                "id": "36",
                                "title": "12.Normal Growth",
                                "duration": "53:23",
                                "url": "http://localhost:5005/stream/3113795597/36",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/36"
                            },
                            {
                                "id": "37",
                                "title": "13. Abnormalities in head size and shape",
                                "duration": "50:11",
                                "url": "http://localhost:5005/stream/3113795597/37",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/37"
                            },
                            {
                                "id": "38",
                                "title": "14. Short stature",
                                "duration": "37:07",
                                "url": "http://localhost:5005/stream/3113795597/38",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/38"
                            },
                            {
                                "id": "39",
                                "title": "15.Normal development",
                                "duration": "56:10",
                                "url": "http://localhost:5005/stream/3113795597/39",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/39"
                            },
                            {
                                "id": "40",
                                "title": "16. Disorders of development",
                                "duration": "19:02",
                                "url": "http://localhost:5005/stream/3113795597/40",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/40"
                            },
                            {
                                "id": "41",
                                "title": "17.Behavioural disorders in children",
                                "duration": "40:48",
                                "url": "http://localhost:5005/stream/3113795597/41",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/41"
                            },
                            {
                                "id": "42",
                                "title": "18. Breastfeeding",
                                "duration": "38:42",
                                "url": "http://localhost:5005/stream/3113795597/42",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/42"
                            },
                            {
                                "id": "43",
                                "title": "19. Malnutrition",
                                "duration": "71:03",
                                "url": "http://localhost:5005/stream/3113795597/43",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/43"
                            },
                            {
                                "id": "44",
                                "title": "20. Rickets and scurvy",
                                "duration": "54:04",
                                "url": "http://localhost:5005/stream/3113795597/44",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/44"
                            },
                            {
                                "id": "45",
                                "title": "21.Genetic disorders",
                                "duration": "84:37",
                                "url": "http://localhost:5005/stream/3113795597/45",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/45"
                            },
                            {
                                "id": "46",
                                "title": "22. Common childhood infections",
                                "duration": "54:15",
                                "url": "http://localhost:5005/stream/3113795597/46",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/46"
                            },
                            {
                                "id": "47",
                                "title": "23. TORCH Infections",
                                "duration": "49:32",
                                "url": "http://localhost:5005/stream/3113795597/47",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/47"
                            },
                            {
                                "id": "48",
                                "title": "24. COVID-19 in children",
                                "duration": "29:38",
                                "url": "http://localhost:5005/stream/3113795597/48",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/48"
                            },
                            {
                                "id": "49",
                                "title": "25. Gastrointestinal anomalies",
                                "duration": "49:13",
                                "url": "http://localhost:5005/stream/3113795597/49",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/49"
                            },
                            {
                                "id": "50",
                                "title": "26. Diarrhoea",
                                "duration": "37:45",
                                "url": "http://localhost:5005/stream/3113795597/50",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/50"
                            },
                            {
                                "id": "51",
                                "title": "27. Miscellaneous topics in GIT",
                                "duration": "38:49",
                                "url": "http://localhost:5005/stream/3113795597/51",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/51"
                            },
                            {
                                "id": "52",
                                "title": "28. Neonatal Cholestasis",
                                "duration": "44:38",
                                "url": "http://localhost:5005/stream/3113795597/52",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/52"
                            },
                            {
                                "id": "53",
                                "title": "29. Metabolic Liver Disorders",
                                "duration": "71:12",
                                "url": "http://localhost:5005/stream/3113795597/53",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/53"
                            },
                            {
                                "id": "54",
                                "title": "30. Upper airway disorders",
                                "duration": "22:56",
                                "url": "http://localhost:5005/stream/3113795597/54",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/54"
                            },
                            {
                                "id": "55",
                                "title": "31. Foreign body, congenital lung anomalies and asthma",
                                "duration": "50:23",
                                "url": "http://localhost:5005/stream/3113795597/55",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/55"
                            },
                            {
                                "id": "56",
                                "title": "32. Lower respiratory tract infection",
                                "duration": "35:12",
                                "url": "http://localhost:5005/stream/3113795597/56",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/56"
                            },
                            {
                                "id": "57",
                                "title": "33 . Cystic fibrosis",
                                "duration": "30:32",
                                "url": "http://localhost:5005/stream/3113795597/57",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/57"
                            },
                            {
                                "id": "58",
                                "title": "34. Fetal circulation and introduction to congenital heart disease",
                                "duration": "42:16",
                                "url": "http://localhost:5005/stream/3113795597/58",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/58"
                            },
                            {
                                "id": "59",
                                "title": "35. Acynotic congenital heart defects",
                                "duration": "74:28",
                                "url": "http://localhost:5005/stream/3113795597/59",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/59"
                            },
                            {
                                "id": "60",
                                "title": "36. Cyanotic congenital heart defects",
                                "duration": "89:48",
                                "url": "http://localhost:5005/stream/3113795597/60",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/60"
                            },
                            {
                                "id": "61",
                                "title": "37. Acute rheumatic fever",
                                "duration": "41:52",
                                "url": "http://localhost:5005/stream/3113795597/61",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/61"
                            },
                            {
                                "id": "62",
                                "title": "38. Congenital anomalies of kidney and urinary tract",
                                "duration": "54:59",
                                "url": "http://localhost:5005/stream/3113795597/62",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/62"
                            },
                            {
                                "id": "63",
                                "title": "39. Glomerulonephritis",
                                "duration": "24:08",
                                "url": "http://localhost:5005/stream/3113795597/63",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/63"
                            },
                            {
                                "id": "64",
                                "title": "40. Nephrotic syndrome",
                                "duration": "36:18",
                                "url": "http://localhost:5005/stream/3113795597/64",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/64"
                            },
                            {
                                "id": "65",
                                "title": "41. Inherited tubular disorders",
                                "duration": "21:04",
                                "url": "http://localhost:5005/stream/3113795597/65",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/65"
                            },
                            {
                                "id": "66",
                                "title": "42. Acute kidney injury and chronic kidney disease",
                                "duration": "49:40",
                                "url": "http://localhost:5005/stream/3113795597/66",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/66"
                            },
                            {
                                "id": "67",
                                "title": "43. Congenital anomalies and hydrocephalus",
                                "duration": "58:07",
                                "url": "http://localhost:5005/stream/3113795597/67",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/67"
                            },
                            {
                                "id": "68",
                                "title": "44. Seizure disorders and epilepsy",
                                "duration": "50:27",
                                "url": "http://localhost:5005/stream/3113795597/68",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/68"
                            },
                            {
                                "id": "69",
                                "title": "45. Cerebral Palsy and CNS infections",
                                "duration": "56:27",
                                "url": "http://localhost:5005/stream/3113795597/69",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/69"
                            },
                            {
                                "id": "70",
                                "title": "46. Neuromuscular Disorders",
                                "duration": "73:30",
                                "url": "http://localhost:5005/stream/3113795597/70",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/70"
                            },
                            {
                                "id": "71",
                                "title": "47. Growth hormone deficiency and hypothyroidism",
                                "duration": "43:49",
                                "url": "http://localhost:5005/stream/3113795597/71",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/71"
                            },
                            {
                                "id": "72",
                                "title": "48. Adrenal disorders",
                                "duration": "48:23",
                                "url": "http://localhost:5005/stream/3113795597/72",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/72"
                            },
                            {
                                "id": "73",
                                "title": "49. Pubertal Disorders",
                                "duration": "30:58",
                                "url": "http://localhost:5005/stream/3113795597/73",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/73"
                            },
                            {
                                "id": "74",
                                "title": "50. Hematological Melagnancies",
                                "duration": "69:33",
                                "url": "http://localhost:5005/stream/3113795597/74",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/74"
                            },
                            {
                                "id": "75",
                                "title": "51. Solid tumor in children",
                                "duration": "35:58",
                                "url": "http://localhost:5005/stream/3113795597/75",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/75"
                            },
                            {
                                "id": "76",
                                "title": "52. Rheumatic diseases of childhood",
                                "duration": "58:56",
                                "url": "http://localhost:5005/stream/3113795597/76",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/76"
                            },
                            {
                                "id": "77",
                                "title": "53. Approach to anemia in children and nutritional anemia",
                                "duration": "42:10",
                                "url": "http://localhost:5005/stream/3113795597/77",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/77"
                            },
                            {
                                "id": "78",
                                "title": "54. Congenital anomalies and hydrocephalus",
                                "duration": "51:11",
                                "url": "http://localhost:5005/stream/3113795597/78",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/78"
                            },
                            {
                                "id": "79",
                                "title": "55. Bleeding disorders",
                                "duration": "20:47",
                                "url": "http://localhost:5005/stream/3113795597/79",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/79"
                            },
                            {
                                "id": "80",
                                "title": "56. Shock",
                                "duration": "20:26",
                                "url": "http://localhost:5005/stream/3113795597/80",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/80"
                            },
                            {
                                "id": "81",
                                "title": "57. PALS Guidelines",
                                "duration": "53:50",
                                "url": "http://localhost:5005/stream/3113795597/81",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/81"
                            },
                            {
                                "id": "82",
                                "title": "paedia ed6 @marrowedition6notes .pdf",
                                "duration": "0:00",
                                "url": "http://localhost:5005/stream/3113795597/82",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/82"
                            }
                        ]
                    },
                    {
                        "id": "community-medicine",
                        "name": "Community Medicine",
                        "lectures": [
                            {
                                "id": "23",
                                "title": "tickle-tickle-happily.mp4",
                                "duration": "0:04",
                                "url": "http://localhost:5005/stream/3113795597/23",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/23"
                            },
                            {
                                "id": "25",
                                "title": "01.How to approach  pediatrics edition 06",
                                "duration": "6:58",
                                "url": "http://localhost:5005/stream/3113795597/25",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/25"
                            },
                            {
                                "id": "26",
                                "title": "02.Normal Newborn",
                                "duration": "29:14",
                                "url": "http://localhost:5005/stream/3113795597/26",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/26"
                            },
                            {
                                "id": "27",
                                "title": "03.Routine Newborn Care",
                                "duration": "47:15",
                                "url": "http://localhost:5005/stream/3113795597/27",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/27"
                            },
                            {
                                "id": "28",
                                "title": "04.Management of LBW Babies",
                                "duration": "46:01",
                                "url": "http://localhost:5005/stream/3113795597/28",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/28"
                            },
                            {
                                "id": "29",
                                "title": "05.Neonatal Resuscitation",
                                "duration": "39:40",
                                "url": "http://localhost:5005/stream/3113795597/29",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/29"
                            },
                            {
                                "id": "30",
                                "title": "06.Infections in neonates",
                                "duration": "31:02",
                                "url": "http://localhost:5005/stream/3113795597/30",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/30"
                            },
                            {
                                "id": "31",
                                "title": "07.Birth asphyxia,HIE and neonatal seizures",
                                "duration": "37:56",
                                "url": "http://localhost:5005/stream/3113795597/31",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/31"
                            },
                            {
                                "id": "32",
                                "title": "08. NEC",
                                "duration": "21:31",
                                "url": "http://localhost:5005/stream/3113795597/32",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/32"
                            },
                            {
                                "id": "33",
                                "title": "09.Respiratory distress in newborn",
                                "duration": "68:31",
                                "url": "http://localhost:5005/stream/3113795597/33",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/33"
                            },
                            {
                                "id": "34",
                                "title": "10.Neonatal hypoglycemia and infant of diabetic mother",
                                "duration": "21:57",
                                "url": "http://localhost:5005/stream/3113795597/34",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/34"
                            },
                            {
                                "id": "35",
                                "title": "11.Neonatal jaundice",
                                "duration": "55:52",
                                "url": "http://localhost:5005/stream/3113795597/35",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/35"
                            },
                            {
                                "id": "36",
                                "title": "12.Normal Growth",
                                "duration": "53:23",
                                "url": "http://localhost:5005/stream/3113795597/36",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/36"
                            },
                            {
                                "id": "37",
                                "title": "13. Abnormalities in head size and shape",
                                "duration": "50:11",
                                "url": "http://localhost:5005/stream/3113795597/37",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/37"
                            },
                            {
                                "id": "38",
                                "title": "14. Short stature",
                                "duration": "37:07",
                                "url": "http://localhost:5005/stream/3113795597/38",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/38"
                            },
                            {
                                "id": "39",
                                "title": "15.Normal development",
                                "duration": "56:10",
                                "url": "http://localhost:5005/stream/3113795597/39",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/39"
                            },
                            {
                                "id": "40",
                                "title": "16. Disorders of development",
                                "duration": "19:02",
                                "url": "http://localhost:5005/stream/3113795597/40",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/40"
                            },
                            {
                                "id": "41",
                                "title": "17.Behavioural disorders in children",
                                "duration": "40:48",
                                "url": "http://localhost:5005/stream/3113795597/41",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/41"
                            },
                            {
                                "id": "42",
                                "title": "18. Breastfeeding",
                                "duration": "38:42",
                                "url": "http://localhost:5005/stream/3113795597/42",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/42"
                            },
                            {
                                "id": "43",
                                "title": "19. Malnutrition",
                                "duration": "71:03",
                                "url": "http://localhost:5005/stream/3113795597/43",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/43"
                            },
                            {
                                "id": "44",
                                "title": "20. Rickets and scurvy",
                                "duration": "54:04",
                                "url": "http://localhost:5005/stream/3113795597/44",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/44"
                            },
                            {
                                "id": "45",
                                "title": "21.Genetic disorders",
                                "duration": "84:37",
                                "url": "http://localhost:5005/stream/3113795597/45",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/45"
                            },
                            {
                                "id": "46",
                                "title": "22. Common childhood infections",
                                "duration": "54:15",
                                "url": "http://localhost:5005/stream/3113795597/46",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/46"
                            },
                            {
                                "id": "47",
                                "title": "23. TORCH Infections",
                                "duration": "49:32",
                                "url": "http://localhost:5005/stream/3113795597/47",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/47"
                            },
                            {
                                "id": "48",
                                "title": "24. COVID-19 in children",
                                "duration": "29:38",
                                "url": "http://localhost:5005/stream/3113795597/48",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/48"
                            },
                            {
                                "id": "49",
                                "title": "25. Gastrointestinal anomalies",
                                "duration": "49:13",
                                "url": "http://localhost:5005/stream/3113795597/49",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/49"
                            },
                            {
                                "id": "50",
                                "title": "26. Diarrhoea",
                                "duration": "37:45",
                                "url": "http://localhost:5005/stream/3113795597/50",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/50"
                            },
                            {
                                "id": "51",
                                "title": "27. Miscellaneous topics in GIT",
                                "duration": "38:49",
                                "url": "http://localhost:5005/stream/3113795597/51",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/51"
                            },
                            {
                                "id": "52",
                                "title": "28. Neonatal Cholestasis",
                                "duration": "44:38",
                                "url": "http://localhost:5005/stream/3113795597/52",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/52"
                            },
                            {
                                "id": "53",
                                "title": "29. Metabolic Liver Disorders",
                                "duration": "71:12",
                                "url": "http://localhost:5005/stream/3113795597/53",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/53"
                            },
                            {
                                "id": "54",
                                "title": "30. Upper airway disorders",
                                "duration": "22:56",
                                "url": "http://localhost:5005/stream/3113795597/54",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/54"
                            },
                            {
                                "id": "55",
                                "title": "31. Foreign body, congenital lung anomalies and asthma",
                                "duration": "50:23",
                                "url": "http://localhost:5005/stream/3113795597/55",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/55"
                            },
                            {
                                "id": "56",
                                "title": "32. Lower respiratory tract infection",
                                "duration": "35:12",
                                "url": "http://localhost:5005/stream/3113795597/56",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/56"
                            },
                            {
                                "id": "57",
                                "title": "33 . Cystic fibrosis",
                                "duration": "30:32",
                                "url": "http://localhost:5005/stream/3113795597/57",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/57"
                            },
                            {
                                "id": "58",
                                "title": "34. Fetal circulation and introduction to congenital heart disease",
                                "duration": "42:16",
                                "url": "http://localhost:5005/stream/3113795597/58",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/58"
                            },
                            {
                                "id": "59",
                                "title": "35. Acynotic congenital heart defects",
                                "duration": "74:28",
                                "url": "http://localhost:5005/stream/3113795597/59",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/59"
                            },
                            {
                                "id": "60",
                                "title": "36. Cyanotic congenital heart defects",
                                "duration": "89:48",
                                "url": "http://localhost:5005/stream/3113795597/60",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/60"
                            },
                            {
                                "id": "61",
                                "title": "37. Acute rheumatic fever",
                                "duration": "41:52",
                                "url": "http://localhost:5005/stream/3113795597/61",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/61"
                            },
                            {
                                "id": "62",
                                "title": "38. Congenital anomalies of kidney and urinary tract",
                                "duration": "54:59",
                                "url": "http://localhost:5005/stream/3113795597/62",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/62"
                            },
                            {
                                "id": "63",
                                "title": "39. Glomerulonephritis",
                                "duration": "24:08",
                                "url": "http://localhost:5005/stream/3113795597/63",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/63"
                            },
                            {
                                "id": "64",
                                "title": "40. Nephrotic syndrome",
                                "duration": "36:18",
                                "url": "http://localhost:5005/stream/3113795597/64",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/64"
                            },
                            {
                                "id": "65",
                                "title": "41. Inherited tubular disorders",
                                "duration": "21:04",
                                "url": "http://localhost:5005/stream/3113795597/65",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/65"
                            },
                            {
                                "id": "66",
                                "title": "42. Acute kidney injury and chronic kidney disease",
                                "duration": "49:40",
                                "url": "http://localhost:5005/stream/3113795597/66",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/66"
                            },
                            {
                                "id": "67",
                                "title": "43. Congenital anomalies and hydrocephalus",
                                "duration": "58:07",
                                "url": "http://localhost:5005/stream/3113795597/67",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/67"
                            },
                            {
                                "id": "68",
                                "title": "44. Seizure disorders and epilepsy",
                                "duration": "50:27",
                                "url": "http://localhost:5005/stream/3113795597/68",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/68"
                            },
                            {
                                "id": "69",
                                "title": "45. Cerebral Palsy and CNS infections",
                                "duration": "56:27",
                                "url": "http://localhost:5005/stream/3113795597/69",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/69"
                            },
                            {
                                "id": "70",
                                "title": "46. Neuromuscular Disorders",
                                "duration": "73:30",
                                "url": "http://localhost:5005/stream/3113795597/70",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/70"
                            },
                            {
                                "id": "71",
                                "title": "47. Growth hormone deficiency and hypothyroidism",
                                "duration": "43:49",
                                "url": "http://localhost:5005/stream/3113795597/71",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/71"
                            },
                            {
                                "id": "72",
                                "title": "48. Adrenal disorders",
                                "duration": "48:23",
                                "url": "http://localhost:5005/stream/3113795597/72",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/72"
                            },
                            {
                                "id": "73",
                                "title": "49. Pubertal Disorders",
                                "duration": "30:58",
                                "url": "http://localhost:5005/stream/3113795597/73",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/73"
                            },
                            {
                                "id": "74",
                                "title": "50. Hematological Melagnancies",
                                "duration": "69:33",
                                "url": "http://localhost:5005/stream/3113795597/74",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/74"
                            },
                            {
                                "id": "75",
                                "title": "51. Solid tumor in children",
                                "duration": "35:58",
                                "url": "http://localhost:5005/stream/3113795597/75",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/75"
                            },
                            {
                                "id": "76",
                                "title": "52. Rheumatic diseases of childhood",
                                "duration": "58:56",
                                "url": "http://localhost:5005/stream/3113795597/76",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/76"
                            },
                            {
                                "id": "77",
                                "title": "53. Approach to anemia in children and nutritional anemia",
                                "duration": "42:10",
                                "url": "http://localhost:5005/stream/3113795597/77",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/77"
                            },
                            {
                                "id": "78",
                                "title": "54. Congenital anomalies and hydrocephalus",
                                "duration": "51:11",
                                "url": "http://localhost:5005/stream/3113795597/78",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/78"
                            },
                            {
                                "id": "79",
                                "title": "55. Bleeding disorders",
                                "duration": "20:47",
                                "url": "http://localhost:5005/stream/3113795597/79",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/79"
                            },
                            {
                                "id": "80",
                                "title": "56. Shock",
                                "duration": "20:26",
                                "url": "http://localhost:5005/stream/3113795597/80",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/80"
                            },
                            {
                                "id": "81",
                                "title": "57. PALS Guidelines",
                                "duration": "53:50",
                                "url": "http://localhost:5005/stream/3113795597/81",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/81"
                            },
                            {
                                "id": "82",
                                "title": "paedia ed6 @marrowedition6notes .pdf",
                                "duration": "0:00",
                                "url": "http://localhost:5005/stream/3113795597/82",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/82"
                            }
                        ]
                    },
                    {
                        "id": "fmt",
                        "name": "FMT",
                        "lectures": [
                            {
                                "id": "23",
                                "title": "tickle-tickle-happily.mp4",
                                "duration": "0:04",
                                "url": "http://localhost:5005/stream/3113795597/23",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/23"
                            },
                            {
                                "id": "25",
                                "title": "01.How to approach  pediatrics edition 06",
                                "duration": "6:58",
                                "url": "http://localhost:5005/stream/3113795597/25",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/25"
                            },
                            {
                                "id": "26",
                                "title": "02.Normal Newborn",
                                "duration": "29:14",
                                "url": "http://localhost:5005/stream/3113795597/26",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/26"
                            },
                            {
                                "id": "27",
                                "title": "03.Routine Newborn Care",
                                "duration": "47:15",
                                "url": "http://localhost:5005/stream/3113795597/27",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/27"
                            },
                            {
                                "id": "28",
                                "title": "04.Management of LBW Babies",
                                "duration": "46:01",
                                "url": "http://localhost:5005/stream/3113795597/28",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/28"
                            },
                            {
                                "id": "29",
                                "title": "05.Neonatal Resuscitation",
                                "duration": "39:40",
                                "url": "http://localhost:5005/stream/3113795597/29",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/29"
                            },
                            {
                                "id": "30",
                                "title": "06.Infections in neonates",
                                "duration": "31:02",
                                "url": "http://localhost:5005/stream/3113795597/30",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/30"
                            },
                            {
                                "id": "31",
                                "title": "07.Birth asphyxia,HIE and neonatal seizures",
                                "duration": "37:56",
                                "url": "http://localhost:5005/stream/3113795597/31",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/31"
                            },
                            {
                                "id": "32",
                                "title": "08. NEC",
                                "duration": "21:31",
                                "url": "http://localhost:5005/stream/3113795597/32",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/32"
                            },
                            {
                                "id": "33",
                                "title": "09.Respiratory distress in newborn",
                                "duration": "68:31",
                                "url": "http://localhost:5005/stream/3113795597/33",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/33"
                            },
                            {
                                "id": "34",
                                "title": "10.Neonatal hypoglycemia and infant of diabetic mother",
                                "duration": "21:57",
                                "url": "http://localhost:5005/stream/3113795597/34",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/34"
                            },
                            {
                                "id": "35",
                                "title": "11.Neonatal jaundice",
                                "duration": "55:52",
                                "url": "http://localhost:5005/stream/3113795597/35",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/35"
                            },
                            {
                                "id": "36",
                                "title": "12.Normal Growth",
                                "duration": "53:23",
                                "url": "http://localhost:5005/stream/3113795597/36",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/36"
                            },
                            {
                                "id": "37",
                                "title": "13. Abnormalities in head size and shape",
                                "duration": "50:11",
                                "url": "http://localhost:5005/stream/3113795597/37",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/37"
                            },
                            {
                                "id": "38",
                                "title": "14. Short stature",
                                "duration": "37:07",
                                "url": "http://localhost:5005/stream/3113795597/38",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/38"
                            },
                            {
                                "id": "39",
                                "title": "15.Normal development",
                                "duration": "56:10",
                                "url": "http://localhost:5005/stream/3113795597/39",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/39"
                            },
                            {
                                "id": "40",
                                "title": "16. Disorders of development",
                                "duration": "19:02",
                                "url": "http://localhost:5005/stream/3113795597/40",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/40"
                            },
                            {
                                "id": "41",
                                "title": "17.Behavioural disorders in children",
                                "duration": "40:48",
                                "url": "http://localhost:5005/stream/3113795597/41",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/41"
                            },
                            {
                                "id": "42",
                                "title": "18. Breastfeeding",
                                "duration": "38:42",
                                "url": "http://localhost:5005/stream/3113795597/42",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/42"
                            },
                            {
                                "id": "43",
                                "title": "19. Malnutrition",
                                "duration": "71:03",
                                "url": "http://localhost:5005/stream/3113795597/43",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/43"
                            },
                            {
                                "id": "44",
                                "title": "20. Rickets and scurvy",
                                "duration": "54:04",
                                "url": "http://localhost:5005/stream/3113795597/44",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/44"
                            },
                            {
                                "id": "45",
                                "title": "21.Genetic disorders",
                                "duration": "84:37",
                                "url": "http://localhost:5005/stream/3113795597/45",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/45"
                            },
                            {
                                "id": "46",
                                "title": "22. Common childhood infections",
                                "duration": "54:15",
                                "url": "http://localhost:5005/stream/3113795597/46",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/46"
                            },
                            {
                                "id": "47",
                                "title": "23. TORCH Infections",
                                "duration": "49:32",
                                "url": "http://localhost:5005/stream/3113795597/47",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/47"
                            },
                            {
                                "id": "48",
                                "title": "24. COVID-19 in children",
                                "duration": "29:38",
                                "url": "http://localhost:5005/stream/3113795597/48",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/48"
                            },
                            {
                                "id": "49",
                                "title": "25. Gastrointestinal anomalies",
                                "duration": "49:13",
                                "url": "http://localhost:5005/stream/3113795597/49",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/49"
                            },
                            {
                                "id": "50",
                                "title": "26. Diarrhoea",
                                "duration": "37:45",
                                "url": "http://localhost:5005/stream/3113795597/50",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/50"
                            },
                            {
                                "id": "51",
                                "title": "27. Miscellaneous topics in GIT",
                                "duration": "38:49",
                                "url": "http://localhost:5005/stream/3113795597/51",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/51"
                            },
                            {
                                "id": "52",
                                "title": "28. Neonatal Cholestasis",
                                "duration": "44:38",
                                "url": "http://localhost:5005/stream/3113795597/52",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/52"
                            },
                            {
                                "id": "53",
                                "title": "29. Metabolic Liver Disorders",
                                "duration": "71:12",
                                "url": "http://localhost:5005/stream/3113795597/53",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/53"
                            },
                            {
                                "id": "54",
                                "title": "30. Upper airway disorders",
                                "duration": "22:56",
                                "url": "http://localhost:5005/stream/3113795597/54",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/54"
                            },
                            {
                                "id": "55",
                                "title": "31. Foreign body, congenital lung anomalies and asthma",
                                "duration": "50:23",
                                "url": "http://localhost:5005/stream/3113795597/55",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/55"
                            },
                            {
                                "id": "56",
                                "title": "32. Lower respiratory tract infection",
                                "duration": "35:12",
                                "url": "http://localhost:5005/stream/3113795597/56",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/56"
                            },
                            {
                                "id": "57",
                                "title": "33 . Cystic fibrosis",
                                "duration": "30:32",
                                "url": "http://localhost:5005/stream/3113795597/57",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/57"
                            },
                            {
                                "id": "58",
                                "title": "34. Fetal circulation and introduction to congenital heart disease",
                                "duration": "42:16",
                                "url": "http://localhost:5005/stream/3113795597/58",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/58"
                            },
                            {
                                "id": "59",
                                "title": "35. Acynotic congenital heart defects",
                                "duration": "74:28",
                                "url": "http://localhost:5005/stream/3113795597/59",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/59"
                            },
                            {
                                "id": "60",
                                "title": "36. Cyanotic congenital heart defects",
                                "duration": "89:48",
                                "url": "http://localhost:5005/stream/3113795597/60",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/60"
                            },
                            {
                                "id": "61",
                                "title": "37. Acute rheumatic fever",
                                "duration": "41:52",
                                "url": "http://localhost:5005/stream/3113795597/61",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/61"
                            },
                            {
                                "id": "62",
                                "title": "38. Congenital anomalies of kidney and urinary tract",
                                "duration": "54:59",
                                "url": "http://localhost:5005/stream/3113795597/62",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/62"
                            },
                            {
                                "id": "63",
                                "title": "39. Glomerulonephritis",
                                "duration": "24:08",
                                "url": "http://localhost:5005/stream/3113795597/63",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/63"
                            },
                            {
                                "id": "64",
                                "title": "40. Nephrotic syndrome",
                                "duration": "36:18",
                                "url": "http://localhost:5005/stream/3113795597/64",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/64"
                            },
                            {
                                "id": "65",
                                "title": "41. Inherited tubular disorders",
                                "duration": "21:04",
                                "url": "http://localhost:5005/stream/3113795597/65",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/65"
                            },
                            {
                                "id": "66",
                                "title": "42. Acute kidney injury and chronic kidney disease",
                                "duration": "49:40",
                                "url": "http://localhost:5005/stream/3113795597/66",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/66"
                            },
                            {
                                "id": "67",
                                "title": "43. Congenital anomalies and hydrocephalus",
                                "duration": "58:07",
                                "url": "http://localhost:5005/stream/3113795597/67",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/67"
                            },
                            {
                                "id": "68",
                                "title": "44. Seizure disorders and epilepsy",
                                "duration": "50:27",
                                "url": "http://localhost:5005/stream/3113795597/68",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/68"
                            },
                            {
                                "id": "69",
                                "title": "45. Cerebral Palsy and CNS infections",
                                "duration": "56:27",
                                "url": "http://localhost:5005/stream/3113795597/69",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/69"
                            },
                            {
                                "id": "70",
                                "title": "46. Neuromuscular Disorders",
                                "duration": "73:30",
                                "url": "http://localhost:5005/stream/3113795597/70",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/70"
                            },
                            {
                                "id": "71",
                                "title": "47. Growth hormone deficiency and hypothyroidism",
                                "duration": "43:49",
                                "url": "http://localhost:5005/stream/3113795597/71",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/71"
                            },
                            {
                                "id": "72",
                                "title": "48. Adrenal disorders",
                                "duration": "48:23",
                                "url": "http://localhost:5005/stream/3113795597/72",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/72"
                            },
                            {
                                "id": "73",
                                "title": "49. Pubertal Disorders",
                                "duration": "30:58",
                                "url": "http://localhost:5005/stream/3113795597/73",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/73"
                            },
                            {
                                "id": "74",
                                "title": "50. Hematological Melagnancies",
                                "duration": "69:33",
                                "url": "http://localhost:5005/stream/3113795597/74",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/74"
                            },
                            {
                                "id": "75",
                                "title": "51. Solid tumor in children",
                                "duration": "35:58",
                                "url": "http://localhost:5005/stream/3113795597/75",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/75"
                            },
                            {
                                "id": "76",
                                "title": "52. Rheumatic diseases of childhood",
                                "duration": "58:56",
                                "url": "http://localhost:5005/stream/3113795597/76",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/76"
                            },
                            {
                                "id": "77",
                                "title": "53. Approach to anemia in children and nutritional anemia",
                                "duration": "42:10",
                                "url": "http://localhost:5005/stream/3113795597/77",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/77"
                            },
                            {
                                "id": "78",
                                "title": "54. Congenital anomalies and hydrocephalus",
                                "duration": "51:11",
                                "url": "http://localhost:5005/stream/3113795597/78",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/78"
                            },
                            {
                                "id": "79",
                                "title": "55. Bleeding disorders",
                                "duration": "20:47",
                                "url": "http://localhost:5005/stream/3113795597/79",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/79"
                            },
                            {
                                "id": "80",
                                "title": "56. Shock",
                                "duration": "20:26",
                                "url": "http://localhost:5005/stream/3113795597/80",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/80"
                            },
                            {
                                "id": "81",
                                "title": "57. PALS Guidelines",
                                "duration": "53:50",
                                "url": "http://localhost:5005/stream/3113795597/81",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/81"
                            },
                            {
                                "id": "82",
                                "title": "paedia ed6 @marrowedition6notes .pdf",
                                "duration": "0:00",
                                "url": "http://localhost:5005/stream/3113795597/82",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/82"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "4th-year",
                "name": "4th Year",
                "subjects": [
                    {
                        "id": "pediatrics",
                        "name": "Pediatrics",
                        "lectures": [
                            {
                                "id": "23",
                                "title": "tickle-tickle-happily.mp4",
                                "duration": "0:04",
                                "url": "http://localhost:5005/stream/3113795597/23",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/23"
                            },
                            {
                                "id": "25",
                                "title": "01.How to approach  pediatrics edition 06",
                                "duration": "6:58",
                                "url": "http://localhost:5005/stream/3113795597/25",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/25"
                            },
                            {
                                "id": "26",
                                "title": "02.Normal Newborn",
                                "duration": "29:14",
                                "url": "http://localhost:5005/stream/3113795597/26",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/26"
                            },
                            {
                                "id": "27",
                                "title": "03.Routine Newborn Care",
                                "duration": "47:15",
                                "url": "http://localhost:5005/stream/3113795597/27",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/27"
                            },
                            {
                                "id": "28",
                                "title": "04.Management of LBW Babies",
                                "duration": "46:01",
                                "url": "http://localhost:5005/stream/3113795597/28",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/28"
                            },
                            {
                                "id": "29",
                                "title": "05.Neonatal Resuscitation",
                                "duration": "39:40",
                                "url": "http://localhost:5005/stream/3113795597/29",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/29"
                            },
                            {
                                "id": "30",
                                "title": "06.Infections in neonates",
                                "duration": "31:02",
                                "url": "http://localhost:5005/stream/3113795597/30",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/30"
                            },
                            {
                                "id": "31",
                                "title": "07.Birth asphyxia,HIE and neonatal seizures",
                                "duration": "37:56",
                                "url": "http://localhost:5005/stream/3113795597/31",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/31"
                            },
                            {
                                "id": "32",
                                "title": "08. NEC",
                                "duration": "21:31",
                                "url": "http://localhost:5005/stream/3113795597/32",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/32"
                            },
                            {
                                "id": "33",
                                "title": "09.Respiratory distress in newborn",
                                "duration": "68:31",
                                "url": "http://localhost:5005/stream/3113795597/33",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/33"
                            },
                            {
                                "id": "34",
                                "title": "10.Neonatal hypoglycemia and infant of diabetic mother",
                                "duration": "21:57",
                                "url": "http://localhost:5005/stream/3113795597/34",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/34"
                            },
                            {
                                "id": "35",
                                "title": "11.Neonatal jaundice",
                                "duration": "55:52",
                                "url": "http://localhost:5005/stream/3113795597/35",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/35"
                            },
                            {
                                "id": "36",
                                "title": "12.Normal Growth",
                                "duration": "53:23",
                                "url": "http://localhost:5005/stream/3113795597/36",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/36"
                            },
                            {
                                "id": "37",
                                "title": "13. Abnormalities in head size and shape",
                                "duration": "50:11",
                                "url": "http://localhost:5005/stream/3113795597/37",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/37"
                            },
                            {
                                "id": "38",
                                "title": "14. Short stature",
                                "duration": "37:07",
                                "url": "http://localhost:5005/stream/3113795597/38",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/38"
                            },
                            {
                                "id": "39",
                                "title": "15.Normal development",
                                "duration": "56:10",
                                "url": "http://localhost:5005/stream/3113795597/39",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/39"
                            },
                            {
                                "id": "40",
                                "title": "16. Disorders of development",
                                "duration": "19:02",
                                "url": "http://localhost:5005/stream/3113795597/40",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/40"
                            },
                            {
                                "id": "41",
                                "title": "17.Behavioural disorders in children",
                                "duration": "40:48",
                                "url": "http://localhost:5005/stream/3113795597/41",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/41"
                            },
                            {
                                "id": "42",
                                "title": "18. Breastfeeding",
                                "duration": "38:42",
                                "url": "http://localhost:5005/stream/3113795597/42",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/42"
                            },
                            {
                                "id": "43",
                                "title": "19. Malnutrition",
                                "duration": "71:03",
                                "url": "http://localhost:5005/stream/3113795597/43",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/43"
                            },
                            {
                                "id": "44",
                                "title": "20. Rickets and scurvy",
                                "duration": "54:04",
                                "url": "http://localhost:5005/stream/3113795597/44",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/44"
                            },
                            {
                                "id": "45",
                                "title": "21.Genetic disorders",
                                "duration": "84:37",
                                "url": "http://localhost:5005/stream/3113795597/45",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/45"
                            },
                            {
                                "id": "46",
                                "title": "22. Common childhood infections",
                                "duration": "54:15",
                                "url": "http://localhost:5005/stream/3113795597/46",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/46"
                            },
                            {
                                "id": "47",
                                "title": "23. TORCH Infections",
                                "duration": "49:32",
                                "url": "http://localhost:5005/stream/3113795597/47",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/47"
                            },
                            {
                                "id": "48",
                                "title": "24. COVID-19 in children",
                                "duration": "29:38",
                                "url": "http://localhost:5005/stream/3113795597/48",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/48"
                            },
                            {
                                "id": "49",
                                "title": "25. Gastrointestinal anomalies",
                                "duration": "49:13",
                                "url": "http://localhost:5005/stream/3113795597/49",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/49"
                            },
                            {
                                "id": "50",
                                "title": "26. Diarrhoea",
                                "duration": "37:45",
                                "url": "http://localhost:5005/stream/3113795597/50",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/50"
                            },
                            {
                                "id": "51",
                                "title": "27. Miscellaneous topics in GIT",
                                "duration": "38:49",
                                "url": "http://localhost:5005/stream/3113795597/51",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/51"
                            },
                            {
                                "id": "52",
                                "title": "28. Neonatal Cholestasis",
                                "duration": "44:38",
                                "url": "http://localhost:5005/stream/3113795597/52",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/52"
                            },
                            {
                                "id": "53",
                                "title": "29. Metabolic Liver Disorders",
                                "duration": "71:12",
                                "url": "http://localhost:5005/stream/3113795597/53",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/53"
                            },
                            {
                                "id": "54",
                                "title": "30. Upper airway disorders",
                                "duration": "22:56",
                                "url": "http://localhost:5005/stream/3113795597/54",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/54"
                            },
                            {
                                "id": "55",
                                "title": "31. Foreign body, congenital lung anomalies and asthma",
                                "duration": "50:23",
                                "url": "http://localhost:5005/stream/3113795597/55",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/55"
                            },
                            {
                                "id": "56",
                                "title": "32. Lower respiratory tract infection",
                                "duration": "35:12",
                                "url": "http://localhost:5005/stream/3113795597/56",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/56"
                            },
                            {
                                "id": "57",
                                "title": "33 . Cystic fibrosis",
                                "duration": "30:32",
                                "url": "http://localhost:5005/stream/3113795597/57",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/57"
                            },
                            {
                                "id": "58",
                                "title": "34. Fetal circulation and introduction to congenital heart disease",
                                "duration": "42:16",
                                "url": "http://localhost:5005/stream/3113795597/58",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/58"
                            },
                            {
                                "id": "59",
                                "title": "35. Acynotic congenital heart defects",
                                "duration": "74:28",
                                "url": "http://localhost:5005/stream/3113795597/59",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/59"
                            },
                            {
                                "id": "60",
                                "title": "36. Cyanotic congenital heart defects",
                                "duration": "89:48",
                                "url": "http://localhost:5005/stream/3113795597/60",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/60"
                            },
                            {
                                "id": "61",
                                "title": "37. Acute rheumatic fever",
                                "duration": "41:52",
                                "url": "http://localhost:5005/stream/3113795597/61",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/61"
                            },
                            {
                                "id": "62",
                                "title": "38. Congenital anomalies of kidney and urinary tract",
                                "duration": "54:59",
                                "url": "http://localhost:5005/stream/3113795597/62",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/62"
                            },
                            {
                                "id": "63",
                                "title": "39. Glomerulonephritis",
                                "duration": "24:08",
                                "url": "http://localhost:5005/stream/3113795597/63",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/63"
                            },
                            {
                                "id": "64",
                                "title": "40. Nephrotic syndrome",
                                "duration": "36:18",
                                "url": "http://localhost:5005/stream/3113795597/64",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/64"
                            },
                            {
                                "id": "65",
                                "title": "41. Inherited tubular disorders",
                                "duration": "21:04",
                                "url": "http://localhost:5005/stream/3113795597/65",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/65"
                            },
                            {
                                "id": "66",
                                "title": "42. Acute kidney injury and chronic kidney disease",
                                "duration": "49:40",
                                "url": "http://localhost:5005/stream/3113795597/66",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/66"
                            },
                            {
                                "id": "67",
                                "title": "43. Congenital anomalies and hydrocephalus",
                                "duration": "58:07",
                                "url": "http://localhost:5005/stream/3113795597/67",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/67"
                            },
                            {
                                "id": "68",
                                "title": "44. Seizure disorders and epilepsy",
                                "duration": "50:27",
                                "url": "http://localhost:5005/stream/3113795597/68",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/68"
                            },
                            {
                                "id": "69",
                                "title": "45. Cerebral Palsy and CNS infections",
                                "duration": "56:27",
                                "url": "http://localhost:5005/stream/3113795597/69",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/69"
                            },
                            {
                                "id": "70",
                                "title": "46. Neuromuscular Disorders",
                                "duration": "73:30",
                                "url": "http://localhost:5005/stream/3113795597/70",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/70"
                            },
                            {
                                "id": "71",
                                "title": "47. Growth hormone deficiency and hypothyroidism",
                                "duration": "43:49",
                                "url": "http://localhost:5005/stream/3113795597/71",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/71"
                            },
                            {
                                "id": "72",
                                "title": "48. Adrenal disorders",
                                "duration": "48:23",
                                "url": "http://localhost:5005/stream/3113795597/72",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/72"
                            },
                            {
                                "id": "73",
                                "title": "49. Pubertal Disorders",
                                "duration": "30:58",
                                "url": "http://localhost:5005/stream/3113795597/73",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/73"
                            },
                            {
                                "id": "74",
                                "title": "50. Hematological Melagnancies",
                                "duration": "69:33",
                                "url": "http://localhost:5005/stream/3113795597/74",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/74"
                            },
                            {
                                "id": "75",
                                "title": "51. Solid tumor in children",
                                "duration": "35:58",
                                "url": "http://localhost:5005/stream/3113795597/75",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/75"
                            },
                            {
                                "id": "76",
                                "title": "52. Rheumatic diseases of childhood",
                                "duration": "58:56",
                                "url": "http://localhost:5005/stream/3113795597/76",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/76"
                            },
                            {
                                "id": "77",
                                "title": "53. Approach to anemia in children and nutritional anemia",
                                "duration": "42:10",
                                "url": "http://localhost:5005/stream/3113795597/77",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/77"
                            },
                            {
                                "id": "78",
                                "title": "54. Congenital anomalies and hydrocephalus",
                                "duration": "51:11",
                                "url": "http://localhost:5005/stream/3113795597/78",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/78"
                            },
                            {
                                "id": "79",
                                "title": "55. Bleeding disorders",
                                "duration": "20:47",
                                "url": "http://localhost:5005/stream/3113795597/79",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/79"
                            },
                            {
                                "id": "80",
                                "title": "56. Shock",
                                "duration": "20:26",
                                "url": "http://localhost:5005/stream/3113795597/80",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/80"
                            },
                            {
                                "id": "81",
                                "title": "57. PALS Guidelines",
                                "duration": "53:50",
                                "url": "http://localhost:5005/stream/3113795597/81",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/81"
                            },
                            {
                                "id": "82",
                                "title": "paedia ed6 @marrowedition6notes .pdf",
                                "duration": "0:00",
                                "url": "http://localhost:5005/stream/3113795597/82",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/82"
                            }
                        ]
                    },
                    {
                        "id": "surgery",
                        "name": "Surgery",
                        "lectures": [
                            {
                                "id": "23",
                                "title": "tickle-tickle-happily.mp4",
                                "duration": "0:04",
                                "url": "http://localhost:5005/stream/3113795597/23",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/23"
                            },
                            {
                                "id": "25",
                                "title": "01.How to approach  pediatrics edition 06",
                                "duration": "6:58",
                                "url": "http://localhost:5005/stream/3113795597/25",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/25"
                            },
                            {
                                "id": "26",
                                "title": "02.Normal Newborn",
                                "duration": "29:14",
                                "url": "http://localhost:5005/stream/3113795597/26",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/26"
                            },
                            {
                                "id": "27",
                                "title": "03.Routine Newborn Care",
                                "duration": "47:15",
                                "url": "http://localhost:5005/stream/3113795597/27",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/27"
                            },
                            {
                                "id": "28",
                                "title": "04.Management of LBW Babies",
                                "duration": "46:01",
                                "url": "http://localhost:5005/stream/3113795597/28",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/28"
                            },
                            {
                                "id": "29",
                                "title": "05.Neonatal Resuscitation",
                                "duration": "39:40",
                                "url": "http://localhost:5005/stream/3113795597/29",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/29"
                            },
                            {
                                "id": "30",
                                "title": "06.Infections in neonates",
                                "duration": "31:02",
                                "url": "http://localhost:5005/stream/3113795597/30",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/30"
                            },
                            {
                                "id": "31",
                                "title": "07.Birth asphyxia,HIE and neonatal seizures",
                                "duration": "37:56",
                                "url": "http://localhost:5005/stream/3113795597/31",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/31"
                            },
                            {
                                "id": "32",
                                "title": "08. NEC",
                                "duration": "21:31",
                                "url": "http://localhost:5005/stream/3113795597/32",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/32"
                            },
                            {
                                "id": "33",
                                "title": "09.Respiratory distress in newborn",
                                "duration": "68:31",
                                "url": "http://localhost:5005/stream/3113795597/33",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/33"
                            },
                            {
                                "id": "34",
                                "title": "10.Neonatal hypoglycemia and infant of diabetic mother",
                                "duration": "21:57",
                                "url": "http://localhost:5005/stream/3113795597/34",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/34"
                            },
                            {
                                "id": "35",
                                "title": "11.Neonatal jaundice",
                                "duration": "55:52",
                                "url": "http://localhost:5005/stream/3113795597/35",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/35"
                            },
                            {
                                "id": "36",
                                "title": "12.Normal Growth",
                                "duration": "53:23",
                                "url": "http://localhost:5005/stream/3113795597/36",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/36"
                            },
                            {
                                "id": "37",
                                "title": "13. Abnormalities in head size and shape",
                                "duration": "50:11",
                                "url": "http://localhost:5005/stream/3113795597/37",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/37"
                            },
                            {
                                "id": "38",
                                "title": "14. Short stature",
                                "duration": "37:07",
                                "url": "http://localhost:5005/stream/3113795597/38",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/38"
                            },
                            {
                                "id": "39",
                                "title": "15.Normal development",
                                "duration": "56:10",
                                "url": "http://localhost:5005/stream/3113795597/39",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/39"
                            },
                            {
                                "id": "40",
                                "title": "16. Disorders of development",
                                "duration": "19:02",
                                "url": "http://localhost:5005/stream/3113795597/40",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/40"
                            },
                            {
                                "id": "41",
                                "title": "17.Behavioural disorders in children",
                                "duration": "40:48",
                                "url": "http://localhost:5005/stream/3113795597/41",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/41"
                            },
                            {
                                "id": "42",
                                "title": "18. Breastfeeding",
                                "duration": "38:42",
                                "url": "http://localhost:5005/stream/3113795597/42",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/42"
                            },
                            {
                                "id": "43",
                                "title": "19. Malnutrition",
                                "duration": "71:03",
                                "url": "http://localhost:5005/stream/3113795597/43",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/43"
                            },
                            {
                                "id": "44",
                                "title": "20. Rickets and scurvy",
                                "duration": "54:04",
                                "url": "http://localhost:5005/stream/3113795597/44",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/44"
                            },
                            {
                                "id": "45",
                                "title": "21.Genetic disorders",
                                "duration": "84:37",
                                "url": "http://localhost:5005/stream/3113795597/45",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/45"
                            },
                            {
                                "id": "46",
                                "title": "22. Common childhood infections",
                                "duration": "54:15",
                                "url": "http://localhost:5005/stream/3113795597/46",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/46"
                            },
                            {
                                "id": "47",
                                "title": "23. TORCH Infections",
                                "duration": "49:32",
                                "url": "http://localhost:5005/stream/3113795597/47",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/47"
                            },
                            {
                                "id": "48",
                                "title": "24. COVID-19 in children",
                                "duration": "29:38",
                                "url": "http://localhost:5005/stream/3113795597/48",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/48"
                            },
                            {
                                "id": "49",
                                "title": "25. Gastrointestinal anomalies",
                                "duration": "49:13",
                                "url": "http://localhost:5005/stream/3113795597/49",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/49"
                            },
                            {
                                "id": "50",
                                "title": "26. Diarrhoea",
                                "duration": "37:45",
                                "url": "http://localhost:5005/stream/3113795597/50",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/50"
                            },
                            {
                                "id": "51",
                                "title": "27. Miscellaneous topics in GIT",
                                "duration": "38:49",
                                "url": "http://localhost:5005/stream/3113795597/51",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/51"
                            },
                            {
                                "id": "52",
                                "title": "28. Neonatal Cholestasis",
                                "duration": "44:38",
                                "url": "http://localhost:5005/stream/3113795597/52",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/52"
                            },
                            {
                                "id": "53",
                                "title": "29. Metabolic Liver Disorders",
                                "duration": "71:12",
                                "url": "http://localhost:5005/stream/3113795597/53",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/53"
                            },
                            {
                                "id": "54",
                                "title": "30. Upper airway disorders",
                                "duration": "22:56",
                                "url": "http://localhost:5005/stream/3113795597/54",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/54"
                            },
                            {
                                "id": "55",
                                "title": "31. Foreign body, congenital lung anomalies and asthma",
                                "duration": "50:23",
                                "url": "http://localhost:5005/stream/3113795597/55",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/55"
                            },
                            {
                                "id": "56",
                                "title": "32. Lower respiratory tract infection",
                                "duration": "35:12",
                                "url": "http://localhost:5005/stream/3113795597/56",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/56"
                            },
                            {
                                "id": "57",
                                "title": "33 . Cystic fibrosis",
                                "duration": "30:32",
                                "url": "http://localhost:5005/stream/3113795597/57",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/57"
                            },
                            {
                                "id": "58",
                                "title": "34. Fetal circulation and introduction to congenital heart disease",
                                "duration": "42:16",
                                "url": "http://localhost:5005/stream/3113795597/58",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/58"
                            },
                            {
                                "id": "59",
                                "title": "35. Acynotic congenital heart defects",
                                "duration": "74:28",
                                "url": "http://localhost:5005/stream/3113795597/59",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/59"
                            },
                            {
                                "id": "60",
                                "title": "36. Cyanotic congenital heart defects",
                                "duration": "89:48",
                                "url": "http://localhost:5005/stream/3113795597/60",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/60"
                            },
                            {
                                "id": "61",
                                "title": "37. Acute rheumatic fever",
                                "duration": "41:52",
                                "url": "http://localhost:5005/stream/3113795597/61",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/61"
                            },
                            {
                                "id": "62",
                                "title": "38. Congenital anomalies of kidney and urinary tract",
                                "duration": "54:59",
                                "url": "http://localhost:5005/stream/3113795597/62",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/62"
                            },
                            {
                                "id": "63",
                                "title": "39. Glomerulonephritis",
                                "duration": "24:08",
                                "url": "http://localhost:5005/stream/3113795597/63",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/63"
                            },
                            {
                                "id": "64",
                                "title": "40. Nephrotic syndrome",
                                "duration": "36:18",
                                "url": "http://localhost:5005/stream/3113795597/64",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/64"
                            },
                            {
                                "id": "65",
                                "title": "41. Inherited tubular disorders",
                                "duration": "21:04",
                                "url": "http://localhost:5005/stream/3113795597/65",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/65"
                            },
                            {
                                "id": "66",
                                "title": "42. Acute kidney injury and chronic kidney disease",
                                "duration": "49:40",
                                "url": "http://localhost:5005/stream/3113795597/66",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/66"
                            },
                            {
                                "id": "67",
                                "title": "43. Congenital anomalies and hydrocephalus",
                                "duration": "58:07",
                                "url": "http://localhost:5005/stream/3113795597/67",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/67"
                            },
                            {
                                "id": "68",
                                "title": "44. Seizure disorders and epilepsy",
                                "duration": "50:27",
                                "url": "http://localhost:5005/stream/3113795597/68",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/68"
                            },
                            {
                                "id": "69",
                                "title": "45. Cerebral Palsy and CNS infections",
                                "duration": "56:27",
                                "url": "http://localhost:5005/stream/3113795597/69",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/69"
                            },
                            {
                                "id": "70",
                                "title": "46. Neuromuscular Disorders",
                                "duration": "73:30",
                                "url": "http://localhost:5005/stream/3113795597/70",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/70"
                            },
                            {
                                "id": "71",
                                "title": "47. Growth hormone deficiency and hypothyroidism",
                                "duration": "43:49",
                                "url": "http://localhost:5005/stream/3113795597/71",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/71"
                            },
                            {
                                "id": "72",
                                "title": "48. Adrenal disorders",
                                "duration": "48:23",
                                "url": "http://localhost:5005/stream/3113795597/72",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/72"
                            },
                            {
                                "id": "73",
                                "title": "49. Pubertal Disorders",
                                "duration": "30:58",
                                "url": "http://localhost:5005/stream/3113795597/73",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/73"
                            },
                            {
                                "id": "74",
                                "title": "50. Hematological Melagnancies",
                                "duration": "69:33",
                                "url": "http://localhost:5005/stream/3113795597/74",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/74"
                            },
                            {
                                "id": "75",
                                "title": "51. Solid tumor in children",
                                "duration": "35:58",
                                "url": "http://localhost:5005/stream/3113795597/75",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/75"
                            },
                            {
                                "id": "76",
                                "title": "52. Rheumatic diseases of childhood",
                                "duration": "58:56",
                                "url": "http://localhost:5005/stream/3113795597/76",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/76"
                            },
                            {
                                "id": "77",
                                "title": "53. Approach to anemia in children and nutritional anemia",
                                "duration": "42:10",
                                "url": "http://localhost:5005/stream/3113795597/77",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/77"
                            },
                            {
                                "id": "78",
                                "title": "54. Congenital anomalies and hydrocephalus",
                                "duration": "51:11",
                                "url": "http://localhost:5005/stream/3113795597/78",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/78"
                            },
                            {
                                "id": "79",
                                "title": "55. Bleeding disorders",
                                "duration": "20:47",
                                "url": "http://localhost:5005/stream/3113795597/79",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/79"
                            },
                            {
                                "id": "80",
                                "title": "56. Shock",
                                "duration": "20:26",
                                "url": "http://localhost:5005/stream/3113795597/80",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/80"
                            },
                            {
                                "id": "81",
                                "title": "57. PALS Guidelines",
                                "duration": "53:50",
                                "url": "http://localhost:5005/stream/3113795597/81",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/81"
                            },
                            {
                                "id": "82",
                                "title": "paedia ed6 @marrowedition6notes .pdf",
                                "duration": "0:00",
                                "url": "http://localhost:5005/stream/3113795597/82",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/82"
                            }
                        ]
                    },
                    {
                        "id": "obg",
                        "name": "OBG",
                        "lectures": [
                            {
                                "id": "23",
                                "title": "tickle-tickle-happily.mp4",
                                "duration": "0:04",
                                "url": "http://localhost:5005/stream/3113795597/23",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/23"
                            },
                            {
                                "id": "25",
                                "title": "01.How to approach  pediatrics edition 06",
                                "duration": "6:58",
                                "url": "http://localhost:5005/stream/3113795597/25",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/25"
                            },
                            {
                                "id": "26",
                                "title": "02.Normal Newborn",
                                "duration": "29:14",
                                "url": "http://localhost:5005/stream/3113795597/26",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/26"
                            },
                            {
                                "id": "27",
                                "title": "03.Routine Newborn Care",
                                "duration": "47:15",
                                "url": "http://localhost:5005/stream/3113795597/27",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/27"
                            },
                            {
                                "id": "28",
                                "title": "04.Management of LBW Babies",
                                "duration": "46:01",
                                "url": "http://localhost:5005/stream/3113795597/28",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/28"
                            },
                            {
                                "id": "29",
                                "title": "05.Neonatal Resuscitation",
                                "duration": "39:40",
                                "url": "http://localhost:5005/stream/3113795597/29",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/29"
                            },
                            {
                                "id": "30",
                                "title": "06.Infections in neonates",
                                "duration": "31:02",
                                "url": "http://localhost:5005/stream/3113795597/30",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/30"
                            },
                            {
                                "id": "31",
                                "title": "07.Birth asphyxia,HIE and neonatal seizures",
                                "duration": "37:56",
                                "url": "http://localhost:5005/stream/3113795597/31",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/31"
                            },
                            {
                                "id": "32",
                                "title": "08. NEC",
                                "duration": "21:31",
                                "url": "http://localhost:5005/stream/3113795597/32",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/32"
                            },
                            {
                                "id": "33",
                                "title": "09.Respiratory distress in newborn",
                                "duration": "68:31",
                                "url": "http://localhost:5005/stream/3113795597/33",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/33"
                            },
                            {
                                "id": "34",
                                "title": "10.Neonatal hypoglycemia and infant of diabetic mother",
                                "duration": "21:57",
                                "url": "http://localhost:5005/stream/3113795597/34",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/34"
                            },
                            {
                                "id": "35",
                                "title": "11.Neonatal jaundice",
                                "duration": "55:52",
                                "url": "http://localhost:5005/stream/3113795597/35",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/35"
                            },
                            {
                                "id": "36",
                                "title": "12.Normal Growth",
                                "duration": "53:23",
                                "url": "http://localhost:5005/stream/3113795597/36",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/36"
                            },
                            {
                                "id": "37",
                                "title": "13. Abnormalities in head size and shape",
                                "duration": "50:11",
                                "url": "http://localhost:5005/stream/3113795597/37",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/37"
                            },
                            {
                                "id": "38",
                                "title": "14. Short stature",
                                "duration": "37:07",
                                "url": "http://localhost:5005/stream/3113795597/38",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/38"
                            },
                            {
                                "id": "39",
                                "title": "15.Normal development",
                                "duration": "56:10",
                                "url": "http://localhost:5005/stream/3113795597/39",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/39"
                            },
                            {
                                "id": "40",
                                "title": "16. Disorders of development",
                                "duration": "19:02",
                                "url": "http://localhost:5005/stream/3113795597/40",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/40"
                            },
                            {
                                "id": "41",
                                "title": "17.Behavioural disorders in children",
                                "duration": "40:48",
                                "url": "http://localhost:5005/stream/3113795597/41",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/41"
                            },
                            {
                                "id": "42",
                                "title": "18. Breastfeeding",
                                "duration": "38:42",
                                "url": "http://localhost:5005/stream/3113795597/42",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/42"
                            },
                            {
                                "id": "43",
                                "title": "19. Malnutrition",
                                "duration": "71:03",
                                "url": "http://localhost:5005/stream/3113795597/43",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/43"
                            },
                            {
                                "id": "44",
                                "title": "20. Rickets and scurvy",
                                "duration": "54:04",
                                "url": "http://localhost:5005/stream/3113795597/44",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/44"
                            },
                            {
                                "id": "45",
                                "title": "21.Genetic disorders",
                                "duration": "84:37",
                                "url": "http://localhost:5005/stream/3113795597/45",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/45"
                            },
                            {
                                "id": "46",
                                "title": "22. Common childhood infections",
                                "duration": "54:15",
                                "url": "http://localhost:5005/stream/3113795597/46",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/46"
                            },
                            {
                                "id": "47",
                                "title": "23. TORCH Infections",
                                "duration": "49:32",
                                "url": "http://localhost:5005/stream/3113795597/47",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/47"
                            },
                            {
                                "id": "48",
                                "title": "24. COVID-19 in children",
                                "duration": "29:38",
                                "url": "http://localhost:5005/stream/3113795597/48",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/48"
                            },
                            {
                                "id": "49",
                                "title": "25. Gastrointestinal anomalies",
                                "duration": "49:13",
                                "url": "http://localhost:5005/stream/3113795597/49",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/49"
                            },
                            {
                                "id": "50",
                                "title": "26. Diarrhoea",
                                "duration": "37:45",
                                "url": "http://localhost:5005/stream/3113795597/50",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/50"
                            },
                            {
                                "id": "51",
                                "title": "27. Miscellaneous topics in GIT",
                                "duration": "38:49",
                                "url": "http://localhost:5005/stream/3113795597/51",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/51"
                            },
                            {
                                "id": "52",
                                "title": "28. Neonatal Cholestasis",
                                "duration": "44:38",
                                "url": "http://localhost:5005/stream/3113795597/52",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/52"
                            },
                            {
                                "id": "53",
                                "title": "29. Metabolic Liver Disorders",
                                "duration": "71:12",
                                "url": "http://localhost:5005/stream/3113795597/53",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/53"
                            },
                            {
                                "id": "54",
                                "title": "30. Upper airway disorders",
                                "duration": "22:56",
                                "url": "http://localhost:5005/stream/3113795597/54",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/54"
                            },
                            {
                                "id": "55",
                                "title": "31. Foreign body, congenital lung anomalies and asthma",
                                "duration": "50:23",
                                "url": "http://localhost:5005/stream/3113795597/55",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/55"
                            },
                            {
                                "id": "56",
                                "title": "32. Lower respiratory tract infection",
                                "duration": "35:12",
                                "url": "http://localhost:5005/stream/3113795597/56",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/56"
                            },
                            {
                                "id": "57",
                                "title": "33 . Cystic fibrosis",
                                "duration": "30:32",
                                "url": "http://localhost:5005/stream/3113795597/57",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/57"
                            },
                            {
                                "id": "58",
                                "title": "34. Fetal circulation and introduction to congenital heart disease",
                                "duration": "42:16",
                                "url": "http://localhost:5005/stream/3113795597/58",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/58"
                            },
                            {
                                "id": "59",
                                "title": "35. Acynotic congenital heart defects",
                                "duration": "74:28",
                                "url": "http://localhost:5005/stream/3113795597/59",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/59"
                            },
                            {
                                "id": "60",
                                "title": "36. Cyanotic congenital heart defects",
                                "duration": "89:48",
                                "url": "http://localhost:5005/stream/3113795597/60",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/60"
                            },
                            {
                                "id": "61",
                                "title": "37. Acute rheumatic fever",
                                "duration": "41:52",
                                "url": "http://localhost:5005/stream/3113795597/61",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/61"
                            },
                            {
                                "id": "62",
                                "title": "38. Congenital anomalies of kidney and urinary tract",
                                "duration": "54:59",
                                "url": "http://localhost:5005/stream/3113795597/62",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/62"
                            },
                            {
                                "id": "63",
                                "title": "39. Glomerulonephritis",
                                "duration": "24:08",
                                "url": "http://localhost:5005/stream/3113795597/63",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/63"
                            },
                            {
                                "id": "64",
                                "title": "40. Nephrotic syndrome",
                                "duration": "36:18",
                                "url": "http://localhost:5005/stream/3113795597/64",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/64"
                            },
                            {
                                "id": "65",
                                "title": "41. Inherited tubular disorders",
                                "duration": "21:04",
                                "url": "http://localhost:5005/stream/3113795597/65",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/65"
                            },
                            {
                                "id": "66",
                                "title": "42. Acute kidney injury and chronic kidney disease",
                                "duration": "49:40",
                                "url": "http://localhost:5005/stream/3113795597/66",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/66"
                            },
                            {
                                "id": "67",
                                "title": "43. Congenital anomalies and hydrocephalus",
                                "duration": "58:07",
                                "url": "http://localhost:5005/stream/3113795597/67",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/67"
                            },
                            {
                                "id": "68",
                                "title": "44. Seizure disorders and epilepsy",
                                "duration": "50:27",
                                "url": "http://localhost:5005/stream/3113795597/68",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/68"
                            },
                            {
                                "id": "69",
                                "title": "45. Cerebral Palsy and CNS infections",
                                "duration": "56:27",
                                "url": "http://localhost:5005/stream/3113795597/69",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/69"
                            },
                            {
                                "id": "70",
                                "title": "46. Neuromuscular Disorders",
                                "duration": "73:30",
                                "url": "http://localhost:5005/stream/3113795597/70",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/70"
                            },
                            {
                                "id": "71",
                                "title": "47. Growth hormone deficiency and hypothyroidism",
                                "duration": "43:49",
                                "url": "http://localhost:5005/stream/3113795597/71",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/71"
                            },
                            {
                                "id": "72",
                                "title": "48. Adrenal disorders",
                                "duration": "48:23",
                                "url": "http://localhost:5005/stream/3113795597/72",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/72"
                            },
                            {
                                "id": "73",
                                "title": "49. Pubertal Disorders",
                                "duration": "30:58",
                                "url": "http://localhost:5005/stream/3113795597/73",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/73"
                            },
                            {
                                "id": "74",
                                "title": "50. Hematological Melagnancies",
                                "duration": "69:33",
                                "url": "http://localhost:5005/stream/3113795597/74",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/74"
                            },
                            {
                                "id": "75",
                                "title": "51. Solid tumor in children",
                                "duration": "35:58",
                                "url": "http://localhost:5005/stream/3113795597/75",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/75"
                            },
                            {
                                "id": "76",
                                "title": "52. Rheumatic diseases of childhood",
                                "duration": "58:56",
                                "url": "http://localhost:5005/stream/3113795597/76",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/76"
                            },
                            {
                                "id": "77",
                                "title": "53. Approach to anemia in children and nutritional anemia",
                                "duration": "42:10",
                                "url": "http://localhost:5005/stream/3113795597/77",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/77"
                            },
                            {
                                "id": "78",
                                "title": "54. Congenital anomalies and hydrocephalus",
                                "duration": "51:11",
                                "url": "http://localhost:5005/stream/3113795597/78",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/78"
                            },
                            {
                                "id": "79",
                                "title": "55. Bleeding disorders",
                                "duration": "20:47",
                                "url": "http://localhost:5005/stream/3113795597/79",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/79"
                            },
                            {
                                "id": "80",
                                "title": "56. Shock",
                                "duration": "20:26",
                                "url": "http://localhost:5005/stream/3113795597/80",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/80"
                            },
                            {
                                "id": "81",
                                "title": "57. PALS Guidelines",
                                "duration": "53:50",
                                "url": "http://localhost:5005/stream/3113795597/81",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/81"
                            },
                            {
                                "id": "82",
                                "title": "paedia ed6 @marrowedition6notes .pdf",
                                "duration": "0:00",
                                "url": "http://localhost:5005/stream/3113795597/82",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/82"
                            }
                        ]
                    },
                    {
                        "id": "medicine",
                        "name": "Medicine",
                        "lectures": [
                            {
                                "id": "23",
                                "title": "tickle-tickle-happily.mp4",
                                "duration": "0:04",
                                "url": "http://localhost:5005/stream/3113795597/23",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/23"
                            },
                            {
                                "id": "25",
                                "title": "01.How to approach  pediatrics edition 06",
                                "duration": "6:58",
                                "url": "http://localhost:5005/stream/3113795597/25",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/25"
                            },
                            {
                                "id": "26",
                                "title": "02.Normal Newborn",
                                "duration": "29:14",
                                "url": "http://localhost:5005/stream/3113795597/26",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/26"
                            },
                            {
                                "id": "27",
                                "title": "03.Routine Newborn Care",
                                "duration": "47:15",
                                "url": "http://localhost:5005/stream/3113795597/27",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/27"
                            },
                            {
                                "id": "28",
                                "title": "04.Management of LBW Babies",
                                "duration": "46:01",
                                "url": "http://localhost:5005/stream/3113795597/28",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/28"
                            },
                            {
                                "id": "29",
                                "title": "05.Neonatal Resuscitation",
                                "duration": "39:40",
                                "url": "http://localhost:5005/stream/3113795597/29",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/29"
                            },
                            {
                                "id": "30",
                                "title": "06.Infections in neonates",
                                "duration": "31:02",
                                "url": "http://localhost:5005/stream/3113795597/30",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/30"
                            },
                            {
                                "id": "31",
                                "title": "07.Birth asphyxia,HIE and neonatal seizures",
                                "duration": "37:56",
                                "url": "http://localhost:5005/stream/3113795597/31",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/31"
                            },
                            {
                                "id": "32",
                                "title": "08. NEC",
                                "duration": "21:31",
                                "url": "http://localhost:5005/stream/3113795597/32",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/32"
                            },
                            {
                                "id": "33",
                                "title": "09.Respiratory distress in newborn",
                                "duration": "68:31",
                                "url": "http://localhost:5005/stream/3113795597/33",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/33"
                            },
                            {
                                "id": "34",
                                "title": "10.Neonatal hypoglycemia and infant of diabetic mother",
                                "duration": "21:57",
                                "url": "http://localhost:5005/stream/3113795597/34",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/34"
                            },
                            {
                                "id": "35",
                                "title": "11.Neonatal jaundice",
                                "duration": "55:52",
                                "url": "http://localhost:5005/stream/3113795597/35",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/35"
                            },
                            {
                                "id": "36",
                                "title": "12.Normal Growth",
                                "duration": "53:23",
                                "url": "http://localhost:5005/stream/3113795597/36",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/36"
                            },
                            {
                                "id": "37",
                                "title": "13. Abnormalities in head size and shape",
                                "duration": "50:11",
                                "url": "http://localhost:5005/stream/3113795597/37",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/37"
                            },
                            {
                                "id": "38",
                                "title": "14. Short stature",
                                "duration": "37:07",
                                "url": "http://localhost:5005/stream/3113795597/38",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/38"
                            },
                            {
                                "id": "39",
                                "title": "15.Normal development",
                                "duration": "56:10",
                                "url": "http://localhost:5005/stream/3113795597/39",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/39"
                            },
                            {
                                "id": "40",
                                "title": "16. Disorders of development",
                                "duration": "19:02",
                                "url": "http://localhost:5005/stream/3113795597/40",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/40"
                            },
                            {
                                "id": "41",
                                "title": "17.Behavioural disorders in children",
                                "duration": "40:48",
                                "url": "http://localhost:5005/stream/3113795597/41",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/41"
                            },
                            {
                                "id": "42",
                                "title": "18. Breastfeeding",
                                "duration": "38:42",
                                "url": "http://localhost:5005/stream/3113795597/42",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/42"
                            },
                            {
                                "id": "43",
                                "title": "19. Malnutrition",
                                "duration": "71:03",
                                "url": "http://localhost:5005/stream/3113795597/43",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/43"
                            },
                            {
                                "id": "44",
                                "title": "20. Rickets and scurvy",
                                "duration": "54:04",
                                "url": "http://localhost:5005/stream/3113795597/44",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/44"
                            },
                            {
                                "id": "45",
                                "title": "21.Genetic disorders",
                                "duration": "84:37",
                                "url": "http://localhost:5005/stream/3113795597/45",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/45"
                            },
                            {
                                "id": "46",
                                "title": "22. Common childhood infections",
                                "duration": "54:15",
                                "url": "http://localhost:5005/stream/3113795597/46",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/46"
                            },
                            {
                                "id": "47",
                                "title": "23. TORCH Infections",
                                "duration": "49:32",
                                "url": "http://localhost:5005/stream/3113795597/47",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/47"
                            },
                            {
                                "id": "48",
                                "title": "24. COVID-19 in children",
                                "duration": "29:38",
                                "url": "http://localhost:5005/stream/3113795597/48",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/48"
                            },
                            {
                                "id": "49",
                                "title": "25. Gastrointestinal anomalies",
                                "duration": "49:13",
                                "url": "http://localhost:5005/stream/3113795597/49",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/49"
                            },
                            {
                                "id": "50",
                                "title": "26. Diarrhoea",
                                "duration": "37:45",
                                "url": "http://localhost:5005/stream/3113795597/50",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/50"
                            },
                            {
                                "id": "51",
                                "title": "27. Miscellaneous topics in GIT",
                                "duration": "38:49",
                                "url": "http://localhost:5005/stream/3113795597/51",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/51"
                            },
                            {
                                "id": "52",
                                "title": "28. Neonatal Cholestasis",
                                "duration": "44:38",
                                "url": "http://localhost:5005/stream/3113795597/52",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/52"
                            },
                            {
                                "id": "53",
                                "title": "29. Metabolic Liver Disorders",
                                "duration": "71:12",
                                "url": "http://localhost:5005/stream/3113795597/53",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/53"
                            },
                            {
                                "id": "54",
                                "title": "30. Upper airway disorders",
                                "duration": "22:56",
                                "url": "http://localhost:5005/stream/3113795597/54",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/54"
                            },
                            {
                                "id": "55",
                                "title": "31. Foreign body, congenital lung anomalies and asthma",
                                "duration": "50:23",
                                "url": "http://localhost:5005/stream/3113795597/55",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/55"
                            },
                            {
                                "id": "56",
                                "title": "32. Lower respiratory tract infection",
                                "duration": "35:12",
                                "url": "http://localhost:5005/stream/3113795597/56",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/56"
                            },
                            {
                                "id": "57",
                                "title": "33 . Cystic fibrosis",
                                "duration": "30:32",
                                "url": "http://localhost:5005/stream/3113795597/57",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/57"
                            },
                            {
                                "id": "58",
                                "title": "34. Fetal circulation and introduction to congenital heart disease",
                                "duration": "42:16",
                                "url": "http://localhost:5005/stream/3113795597/58",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/58"
                            },
                            {
                                "id": "59",
                                "title": "35. Acynotic congenital heart defects",
                                "duration": "74:28",
                                "url": "http://localhost:5005/stream/3113795597/59",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/59"
                            },
                            {
                                "id": "60",
                                "title": "36. Cyanotic congenital heart defects",
                                "duration": "89:48",
                                "url": "http://localhost:5005/stream/3113795597/60",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/60"
                            },
                            {
                                "id": "61",
                                "title": "37. Acute rheumatic fever",
                                "duration": "41:52",
                                "url": "http://localhost:5005/stream/3113795597/61",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/61"
                            },
                            {
                                "id": "62",
                                "title": "38. Congenital anomalies of kidney and urinary tract",
                                "duration": "54:59",
                                "url": "http://localhost:5005/stream/3113795597/62",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/62"
                            },
                            {
                                "id": "63",
                                "title": "39. Glomerulonephritis",
                                "duration": "24:08",
                                "url": "http://localhost:5005/stream/3113795597/63",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/63"
                            },
                            {
                                "id": "64",
                                "title": "40. Nephrotic syndrome",
                                "duration": "36:18",
                                "url": "http://localhost:5005/stream/3113795597/64",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/64"
                            },
                            {
                                "id": "65",
                                "title": "41. Inherited tubular disorders",
                                "duration": "21:04",
                                "url": "http://localhost:5005/stream/3113795597/65",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/65"
                            },
                            {
                                "id": "66",
                                "title": "42. Acute kidney injury and chronic kidney disease",
                                "duration": "49:40",
                                "url": "http://localhost:5005/stream/3113795597/66",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/66"
                            },
                            {
                                "id": "67",
                                "title": "43. Congenital anomalies and hydrocephalus",
                                "duration": "58:07",
                                "url": "http://localhost:5005/stream/3113795597/67",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/67"
                            },
                            {
                                "id": "68",
                                "title": "44. Seizure disorders and epilepsy",
                                "duration": "50:27",
                                "url": "http://localhost:5005/stream/3113795597/68",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/68"
                            },
                            {
                                "id": "69",
                                "title": "45. Cerebral Palsy and CNS infections",
                                "duration": "56:27",
                                "url": "http://localhost:5005/stream/3113795597/69",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/69"
                            },
                            {
                                "id": "70",
                                "title": "46. Neuromuscular Disorders",
                                "duration": "73:30",
                                "url": "http://localhost:5005/stream/3113795597/70",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/70"
                            },
                            {
                                "id": "71",
                                "title": "47. Growth hormone deficiency and hypothyroidism",
                                "duration": "43:49",
                                "url": "http://localhost:5005/stream/3113795597/71",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/71"
                            },
                            {
                                "id": "72",
                                "title": "48. Adrenal disorders",
                                "duration": "48:23",
                                "url": "http://localhost:5005/stream/3113795597/72",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/72"
                            },
                            {
                                "id": "73",
                                "title": "49. Pubertal Disorders",
                                "duration": "30:58",
                                "url": "http://localhost:5005/stream/3113795597/73",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/73"
                            },
                            {
                                "id": "74",
                                "title": "50. Hematological Melagnancies",
                                "duration": "69:33",
                                "url": "http://localhost:5005/stream/3113795597/74",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/74"
                            },
                            {
                                "id": "75",
                                "title": "51. Solid tumor in children",
                                "duration": "35:58",
                                "url": "http://localhost:5005/stream/3113795597/75",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/75"
                            },
                            {
                                "id": "76",
                                "title": "52. Rheumatic diseases of childhood",
                                "duration": "58:56",
                                "url": "http://localhost:5005/stream/3113795597/76",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/76"
                            },
                            {
                                "id": "77",
                                "title": "53. Approach to anemia in children and nutritional anemia",
                                "duration": "42:10",
                                "url": "http://localhost:5005/stream/3113795597/77",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/77"
                            },
                            {
                                "id": "78",
                                "title": "54. Congenital anomalies and hydrocephalus",
                                "duration": "51:11",
                                "url": "http://localhost:5005/stream/3113795597/78",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/78"
                            },
                            {
                                "id": "79",
                                "title": "55. Bleeding disorders",
                                "duration": "20:47",
                                "url": "http://localhost:5005/stream/3113795597/79",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/79"
                            },
                            {
                                "id": "80",
                                "title": "56. Shock",
                                "duration": "20:26",
                                "url": "http://localhost:5005/stream/3113795597/80",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/80"
                            },
                            {
                                "id": "81",
                                "title": "57. PALS Guidelines",
                                "duration": "53:50",
                                "url": "http://localhost:5005/stream/3113795597/81",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/81"
                            },
                            {
                                "id": "82",
                                "title": "paedia ed6 @marrowedition6notes .pdf",
                                "duration": "0:00",
                                "url": "http://localhost:5005/stream/3113795597/82",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/82"
                            }
                        ]
                    },
                    {
                        "id": "orthopaedics",
                        "name": "Orthopaedics",
                        "lectures": [
                            {
                                "id": "23",
                                "title": "tickle-tickle-happily.mp4",
                                "duration": "0:04",
                                "url": "http://localhost:5005/stream/3113795597/23",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/23"
                            },
                            {
                                "id": "25",
                                "title": "01.How to approach  pediatrics edition 06",
                                "duration": "6:58",
                                "url": "http://localhost:5005/stream/3113795597/25",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/25"
                            },
                            {
                                "id": "26",
                                "title": "02.Normal Newborn",
                                "duration": "29:14",
                                "url": "http://localhost:5005/stream/3113795597/26",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/26"
                            },
                            {
                                "id": "27",
                                "title": "03.Routine Newborn Care",
                                "duration": "47:15",
                                "url": "http://localhost:5005/stream/3113795597/27",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/27"
                            },
                            {
                                "id": "28",
                                "title": "04.Management of LBW Babies",
                                "duration": "46:01",
                                "url": "http://localhost:5005/stream/3113795597/28",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/28"
                            },
                            {
                                "id": "29",
                                "title": "05.Neonatal Resuscitation",
                                "duration": "39:40",
                                "url": "http://localhost:5005/stream/3113795597/29",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/29"
                            },
                            {
                                "id": "30",
                                "title": "06.Infections in neonates",
                                "duration": "31:02",
                                "url": "http://localhost:5005/stream/3113795597/30",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/30"
                            },
                            {
                                "id": "31",
                                "title": "07.Birth asphyxia,HIE and neonatal seizures",
                                "duration": "37:56",
                                "url": "http://localhost:5005/stream/3113795597/31",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/31"
                            },
                            {
                                "id": "32",
                                "title": "08. NEC",
                                "duration": "21:31",
                                "url": "http://localhost:5005/stream/3113795597/32",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/32"
                            },
                            {
                                "id": "33",
                                "title": "09.Respiratory distress in newborn",
                                "duration": "68:31",
                                "url": "http://localhost:5005/stream/3113795597/33",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/33"
                            },
                            {
                                "id": "34",
                                "title": "10.Neonatal hypoglycemia and infant of diabetic mother",
                                "duration": "21:57",
                                "url": "http://localhost:5005/stream/3113795597/34",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/34"
                            },
                            {
                                "id": "35",
                                "title": "11.Neonatal jaundice",
                                "duration": "55:52",
                                "url": "http://localhost:5005/stream/3113795597/35",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/35"
                            },
                            {
                                "id": "36",
                                "title": "12.Normal Growth",
                                "duration": "53:23",
                                "url": "http://localhost:5005/stream/3113795597/36",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/36"
                            },
                            {
                                "id": "37",
                                "title": "13. Abnormalities in head size and shape",
                                "duration": "50:11",
                                "url": "http://localhost:5005/stream/3113795597/37",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/37"
                            },
                            {
                                "id": "38",
                                "title": "14. Short stature",
                                "duration": "37:07",
                                "url": "http://localhost:5005/stream/3113795597/38",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/38"
                            },
                            {
                                "id": "39",
                                "title": "15.Normal development",
                                "duration": "56:10",
                                "url": "http://localhost:5005/stream/3113795597/39",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/39"
                            },
                            {
                                "id": "40",
                                "title": "16. Disorders of development",
                                "duration": "19:02",
                                "url": "http://localhost:5005/stream/3113795597/40",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/40"
                            },
                            {
                                "id": "41",
                                "title": "17.Behavioural disorders in children",
                                "duration": "40:48",
                                "url": "http://localhost:5005/stream/3113795597/41",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/41"
                            },
                            {
                                "id": "42",
                                "title": "18. Breastfeeding",
                                "duration": "38:42",
                                "url": "http://localhost:5005/stream/3113795597/42",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/42"
                            },
                            {
                                "id": "43",
                                "title": "19. Malnutrition",
                                "duration": "71:03",
                                "url": "http://localhost:5005/stream/3113795597/43",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/43"
                            },
                            {
                                "id": "44",
                                "title": "20. Rickets and scurvy",
                                "duration": "54:04",
                                "url": "http://localhost:5005/stream/3113795597/44",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/44"
                            },
                            {
                                "id": "45",
                                "title": "21.Genetic disorders",
                                "duration": "84:37",
                                "url": "http://localhost:5005/stream/3113795597/45",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/45"
                            },
                            {
                                "id": "46",
                                "title": "22. Common childhood infections",
                                "duration": "54:15",
                                "url": "http://localhost:5005/stream/3113795597/46",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/46"
                            },
                            {
                                "id": "47",
                                "title": "23. TORCH Infections",
                                "duration": "49:32",
                                "url": "http://localhost:5005/stream/3113795597/47",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/47"
                            },
                            {
                                "id": "48",
                                "title": "24. COVID-19 in children",
                                "duration": "29:38",
                                "url": "http://localhost:5005/stream/3113795597/48",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/48"
                            },
                            {
                                "id": "49",
                                "title": "25. Gastrointestinal anomalies",
                                "duration": "49:13",
                                "url": "http://localhost:5005/stream/3113795597/49",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/49"
                            },
                            {
                                "id": "50",
                                "title": "26. Diarrhoea",
                                "duration": "37:45",
                                "url": "http://localhost:5005/stream/3113795597/50",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/50"
                            },
                            {
                                "id": "51",
                                "title": "27. Miscellaneous topics in GIT",
                                "duration": "38:49",
                                "url": "http://localhost:5005/stream/3113795597/51",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/51"
                            },
                            {
                                "id": "52",
                                "title": "28. Neonatal Cholestasis",
                                "duration": "44:38",
                                "url": "http://localhost:5005/stream/3113795597/52",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/52"
                            },
                            {
                                "id": "53",
                                "title": "29. Metabolic Liver Disorders",
                                "duration": "71:12",
                                "url": "http://localhost:5005/stream/3113795597/53",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/53"
                            },
                            {
                                "id": "54",
                                "title": "30. Upper airway disorders",
                                "duration": "22:56",
                                "url": "http://localhost:5005/stream/3113795597/54",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/54"
                            },
                            {
                                "id": "55",
                                "title": "31. Foreign body, congenital lung anomalies and asthma",
                                "duration": "50:23",
                                "url": "http://localhost:5005/stream/3113795597/55",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/55"
                            },
                            {
                                "id": "56",
                                "title": "32. Lower respiratory tract infection",
                                "duration": "35:12",
                                "url": "http://localhost:5005/stream/3113795597/56",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/56"
                            },
                            {
                                "id": "57",
                                "title": "33 . Cystic fibrosis",
                                "duration": "30:32",
                                "url": "http://localhost:5005/stream/3113795597/57",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/57"
                            },
                            {
                                "id": "58",
                                "title": "34. Fetal circulation and introduction to congenital heart disease",
                                "duration": "42:16",
                                "url": "http://localhost:5005/stream/3113795597/58",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/58"
                            },
                            {
                                "id": "59",
                                "title": "35. Acynotic congenital heart defects",
                                "duration": "74:28",
                                "url": "http://localhost:5005/stream/3113795597/59",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/59"
                            },
                            {
                                "id": "60",
                                "title": "36. Cyanotic congenital heart defects",
                                "duration": "89:48",
                                "url": "http://localhost:5005/stream/3113795597/60",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/60"
                            },
                            {
                                "id": "61",
                                "title": "37. Acute rheumatic fever",
                                "duration": "41:52",
                                "url": "http://localhost:5005/stream/3113795597/61",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/61"
                            },
                            {
                                "id": "62",
                                "title": "38. Congenital anomalies of kidney and urinary tract",
                                "duration": "54:59",
                                "url": "http://localhost:5005/stream/3113795597/62",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/62"
                            },
                            {
                                "id": "63",
                                "title": "39. Glomerulonephritis",
                                "duration": "24:08",
                                "url": "http://localhost:5005/stream/3113795597/63",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/63"
                            },
                            {
                                "id": "64",
                                "title": "40. Nephrotic syndrome",
                                "duration": "36:18",
                                "url": "http://localhost:5005/stream/3113795597/64",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/64"
                            },
                            {
                                "id": "65",
                                "title": "41. Inherited tubular disorders",
                                "duration": "21:04",
                                "url": "http://localhost:5005/stream/3113795597/65",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/65"
                            },
                            {
                                "id": "66",
                                "title": "42. Acute kidney injury and chronic kidney disease",
                                "duration": "49:40",
                                "url": "http://localhost:5005/stream/3113795597/66",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/66"
                            },
                            {
                                "id": "67",
                                "title": "43. Congenital anomalies and hydrocephalus",
                                "duration": "58:07",
                                "url": "http://localhost:5005/stream/3113795597/67",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/67"
                            },
                            {
                                "id": "68",
                                "title": "44. Seizure disorders and epilepsy",
                                "duration": "50:27",
                                "url": "http://localhost:5005/stream/3113795597/68",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/68"
                            },
                            {
                                "id": "69",
                                "title": "45. Cerebral Palsy and CNS infections",
                                "duration": "56:27",
                                "url": "http://localhost:5005/stream/3113795597/69",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/69"
                            },
                            {
                                "id": "70",
                                "title": "46. Neuromuscular Disorders",
                                "duration": "73:30",
                                "url": "http://localhost:5005/stream/3113795597/70",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/70"
                            },
                            {
                                "id": "71",
                                "title": "47. Growth hormone deficiency and hypothyroidism",
                                "duration": "43:49",
                                "url": "http://localhost:5005/stream/3113795597/71",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/71"
                            },
                            {
                                "id": "72",
                                "title": "48. Adrenal disorders",
                                "duration": "48:23",
                                "url": "http://localhost:5005/stream/3113795597/72",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/72"
                            },
                            {
                                "id": "73",
                                "title": "49. Pubertal Disorders",
                                "duration": "30:58",
                                "url": "http://localhost:5005/stream/3113795597/73",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/73"
                            },
                            {
                                "id": "74",
                                "title": "50. Hematological Melagnancies",
                                "duration": "69:33",
                                "url": "http://localhost:5005/stream/3113795597/74",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/74"
                            },
                            {
                                "id": "75",
                                "title": "51. Solid tumor in children",
                                "duration": "35:58",
                                "url": "http://localhost:5005/stream/3113795597/75",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/75"
                            },
                            {
                                "id": "76",
                                "title": "52. Rheumatic diseases of childhood",
                                "duration": "58:56",
                                "url": "http://localhost:5005/stream/3113795597/76",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/76"
                            },
                            {
                                "id": "77",
                                "title": "53. Approach to anemia in children and nutritional anemia",
                                "duration": "42:10",
                                "url": "http://localhost:5005/stream/3113795597/77",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/77"
                            },
                            {
                                "id": "78",
                                "title": "54. Congenital anomalies and hydrocephalus",
                                "duration": "51:11",
                                "url": "http://localhost:5005/stream/3113795597/78",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/78"
                            },
                            {
                                "id": "79",
                                "title": "55. Bleeding disorders",
                                "duration": "20:47",
                                "url": "http://localhost:5005/stream/3113795597/79",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/79"
                            },
                            {
                                "id": "80",
                                "title": "56. Shock",
                                "duration": "20:26",
                                "url": "http://localhost:5005/stream/3113795597/80",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/80"
                            },
                            {
                                "id": "81",
                                "title": "57. PALS Guidelines",
                                "duration": "53:50",
                                "url": "http://localhost:5005/stream/3113795597/81",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/81"
                            },
                            {
                                "id": "82",
                                "title": "paedia ed6 @marrowedition6notes .pdf",
                                "duration": "0:00",
                                "url": "http://localhost:5005/stream/3113795597/82",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/82"
                            }
                        ]
                    },
                    {
                        "id": "radiology",
                        "name": "Radiology",
                        "lectures": [
                            {
                                "id": "23",
                                "title": "tickle-tickle-happily.mp4",
                                "duration": "0:04",
                                "url": "http://localhost:5005/stream/3113795597/23",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/23"
                            },
                            {
                                "id": "25",
                                "title": "01.How to approach  pediatrics edition 06",
                                "duration": "6:58",
                                "url": "http://localhost:5005/stream/3113795597/25",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/25"
                            },
                            {
                                "id": "26",
                                "title": "02.Normal Newborn",
                                "duration": "29:14",
                                "url": "http://localhost:5005/stream/3113795597/26",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/26"
                            },
                            {
                                "id": "27",
                                "title": "03.Routine Newborn Care",
                                "duration": "47:15",
                                "url": "http://localhost:5005/stream/3113795597/27",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/27"
                            },
                            {
                                "id": "28",
                                "title": "04.Management of LBW Babies",
                                "duration": "46:01",
                                "url": "http://localhost:5005/stream/3113795597/28",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/28"
                            },
                            {
                                "id": "29",
                                "title": "05.Neonatal Resuscitation",
                                "duration": "39:40",
                                "url": "http://localhost:5005/stream/3113795597/29",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/29"
                            },
                            {
                                "id": "30",
                                "title": "06.Infections in neonates",
                                "duration": "31:02",
                                "url": "http://localhost:5005/stream/3113795597/30",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/30"
                            },
                            {
                                "id": "31",
                                "title": "07.Birth asphyxia,HIE and neonatal seizures",
                                "duration": "37:56",
                                "url": "http://localhost:5005/stream/3113795597/31",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/31"
                            },
                            {
                                "id": "32",
                                "title": "08. NEC",
                                "duration": "21:31",
                                "url": "http://localhost:5005/stream/3113795597/32",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/32"
                            },
                            {
                                "id": "33",
                                "title": "09.Respiratory distress in newborn",
                                "duration": "68:31",
                                "url": "http://localhost:5005/stream/3113795597/33",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/33"
                            },
                            {
                                "id": "34",
                                "title": "10.Neonatal hypoglycemia and infant of diabetic mother",
                                "duration": "21:57",
                                "url": "http://localhost:5005/stream/3113795597/34",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/34"
                            },
                            {
                                "id": "35",
                                "title": "11.Neonatal jaundice",
                                "duration": "55:52",
                                "url": "http://localhost:5005/stream/3113795597/35",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/35"
                            },
                            {
                                "id": "36",
                                "title": "12.Normal Growth",
                                "duration": "53:23",
                                "url": "http://localhost:5005/stream/3113795597/36",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/36"
                            },
                            {
                                "id": "37",
                                "title": "13. Abnormalities in head size and shape",
                                "duration": "50:11",
                                "url": "http://localhost:5005/stream/3113795597/37",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/37"
                            },
                            {
                                "id": "38",
                                "title": "14. Short stature",
                                "duration": "37:07",
                                "url": "http://localhost:5005/stream/3113795597/38",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/38"
                            },
                            {
                                "id": "39",
                                "title": "15.Normal development",
                                "duration": "56:10",
                                "url": "http://localhost:5005/stream/3113795597/39",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/39"
                            },
                            {
                                "id": "40",
                                "title": "16. Disorders of development",
                                "duration": "19:02",
                                "url": "http://localhost:5005/stream/3113795597/40",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/40"
                            },
                            {
                                "id": "41",
                                "title": "17.Behavioural disorders in children",
                                "duration": "40:48",
                                "url": "http://localhost:5005/stream/3113795597/41",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/41"
                            },
                            {
                                "id": "42",
                                "title": "18. Breastfeeding",
                                "duration": "38:42",
                                "url": "http://localhost:5005/stream/3113795597/42",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/42"
                            },
                            {
                                "id": "43",
                                "title": "19. Malnutrition",
                                "duration": "71:03",
                                "url": "http://localhost:5005/stream/3113795597/43",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/43"
                            },
                            {
                                "id": "44",
                                "title": "20. Rickets and scurvy",
                                "duration": "54:04",
                                "url": "http://localhost:5005/stream/3113795597/44",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/44"
                            },
                            {
                                "id": "45",
                                "title": "21.Genetic disorders",
                                "duration": "84:37",
                                "url": "http://localhost:5005/stream/3113795597/45",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/45"
                            },
                            {
                                "id": "46",
                                "title": "22. Common childhood infections",
                                "duration": "54:15",
                                "url": "http://localhost:5005/stream/3113795597/46",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/46"
                            },
                            {
                                "id": "47",
                                "title": "23. TORCH Infections",
                                "duration": "49:32",
                                "url": "http://localhost:5005/stream/3113795597/47",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/47"
                            },
                            {
                                "id": "48",
                                "title": "24. COVID-19 in children",
                                "duration": "29:38",
                                "url": "http://localhost:5005/stream/3113795597/48",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/48"
                            },
                            {
                                "id": "49",
                                "title": "25. Gastrointestinal anomalies",
                                "duration": "49:13",
                                "url": "http://localhost:5005/stream/3113795597/49",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/49"
                            },
                            {
                                "id": "50",
                                "title": "26. Diarrhoea",
                                "duration": "37:45",
                                "url": "http://localhost:5005/stream/3113795597/50",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/50"
                            },
                            {
                                "id": "51",
                                "title": "27. Miscellaneous topics in GIT",
                                "duration": "38:49",
                                "url": "http://localhost:5005/stream/3113795597/51",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/51"
                            },
                            {
                                "id": "52",
                                "title": "28. Neonatal Cholestasis",
                                "duration": "44:38",
                                "url": "http://localhost:5005/stream/3113795597/52",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/52"
                            },
                            {
                                "id": "53",
                                "title": "29. Metabolic Liver Disorders",
                                "duration": "71:12",
                                "url": "http://localhost:5005/stream/3113795597/53",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/53"
                            },
                            {
                                "id": "54",
                                "title": "30. Upper airway disorders",
                                "duration": "22:56",
                                "url": "http://localhost:5005/stream/3113795597/54",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/54"
                            },
                            {
                                "id": "55",
                                "title": "31. Foreign body, congenital lung anomalies and asthma",
                                "duration": "50:23",
                                "url": "http://localhost:5005/stream/3113795597/55",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/55"
                            },
                            {
                                "id": "56",
                                "title": "32. Lower respiratory tract infection",
                                "duration": "35:12",
                                "url": "http://localhost:5005/stream/3113795597/56",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/56"
                            },
                            {
                                "id": "57",
                                "title": "33 . Cystic fibrosis",
                                "duration": "30:32",
                                "url": "http://localhost:5005/stream/3113795597/57",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/57"
                            },
                            {
                                "id": "58",
                                "title": "34. Fetal circulation and introduction to congenital heart disease",
                                "duration": "42:16",
                                "url": "http://localhost:5005/stream/3113795597/58",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/58"
                            },
                            {
                                "id": "59",
                                "title": "35. Acynotic congenital heart defects",
                                "duration": "74:28",
                                "url": "http://localhost:5005/stream/3113795597/59",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/59"
                            },
                            {
                                "id": "60",
                                "title": "36. Cyanotic congenital heart defects",
                                "duration": "89:48",
                                "url": "http://localhost:5005/stream/3113795597/60",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/60"
                            },
                            {
                                "id": "61",
                                "title": "37. Acute rheumatic fever",
                                "duration": "41:52",
                                "url": "http://localhost:5005/stream/3113795597/61",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/61"
                            },
                            {
                                "id": "62",
                                "title": "38. Congenital anomalies of kidney and urinary tract",
                                "duration": "54:59",
                                "url": "http://localhost:5005/stream/3113795597/62",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/62"
                            },
                            {
                                "id": "63",
                                "title": "39. Glomerulonephritis",
                                "duration": "24:08",
                                "url": "http://localhost:5005/stream/3113795597/63",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/63"
                            },
                            {
                                "id": "64",
                                "title": "40. Nephrotic syndrome",
                                "duration": "36:18",
                                "url": "http://localhost:5005/stream/3113795597/64",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/64"
                            },
                            {
                                "id": "65",
                                "title": "41. Inherited tubular disorders",
                                "duration": "21:04",
                                "url": "http://localhost:5005/stream/3113795597/65",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/65"
                            },
                            {
                                "id": "66",
                                "title": "42. Acute kidney injury and chronic kidney disease",
                                "duration": "49:40",
                                "url": "http://localhost:5005/stream/3113795597/66",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/66"
                            },
                            {
                                "id": "67",
                                "title": "43. Congenital anomalies and hydrocephalus",
                                "duration": "58:07",
                                "url": "http://localhost:5005/stream/3113795597/67",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/67"
                            },
                            {
                                "id": "68",
                                "title": "44. Seizure disorders and epilepsy",
                                "duration": "50:27",
                                "url": "http://localhost:5005/stream/3113795597/68",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/68"
                            },
                            {
                                "id": "69",
                                "title": "45. Cerebral Palsy and CNS infections",
                                "duration": "56:27",
                                "url": "http://localhost:5005/stream/3113795597/69",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/69"
                            },
                            {
                                "id": "70",
                                "title": "46. Neuromuscular Disorders",
                                "duration": "73:30",
                                "url": "http://localhost:5005/stream/3113795597/70",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/70"
                            },
                            {
                                "id": "71",
                                "title": "47. Growth hormone deficiency and hypothyroidism",
                                "duration": "43:49",
                                "url": "http://localhost:5005/stream/3113795597/71",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/71"
                            },
                            {
                                "id": "72",
                                "title": "48. Adrenal disorders",
                                "duration": "48:23",
                                "url": "http://localhost:5005/stream/3113795597/72",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/72"
                            },
                            {
                                "id": "73",
                                "title": "49. Pubertal Disorders",
                                "duration": "30:58",
                                "url": "http://localhost:5005/stream/3113795597/73",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/73"
                            },
                            {
                                "id": "74",
                                "title": "50. Hematological Melagnancies",
                                "duration": "69:33",
                                "url": "http://localhost:5005/stream/3113795597/74",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/74"
                            },
                            {
                                "id": "75",
                                "title": "51. Solid tumor in children",
                                "duration": "35:58",
                                "url": "http://localhost:5005/stream/3113795597/75",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/75"
                            },
                            {
                                "id": "76",
                                "title": "52. Rheumatic diseases of childhood",
                                "duration": "58:56",
                                "url": "http://localhost:5005/stream/3113795597/76",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/76"
                            },
                            {
                                "id": "77",
                                "title": "53. Approach to anemia in children and nutritional anemia",
                                "duration": "42:10",
                                "url": "http://localhost:5005/stream/3113795597/77",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/77"
                            },
                            {
                                "id": "78",
                                "title": "54. Congenital anomalies and hydrocephalus",
                                "duration": "51:11",
                                "url": "http://localhost:5005/stream/3113795597/78",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/78"
                            },
                            {
                                "id": "79",
                                "title": "55. Bleeding disorders",
                                "duration": "20:47",
                                "url": "http://localhost:5005/stream/3113795597/79",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/79"
                            },
                            {
                                "id": "80",
                                "title": "56. Shock",
                                "duration": "20:26",
                                "url": "http://localhost:5005/stream/3113795597/80",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/80"
                            },
                            {
                                "id": "81",
                                "title": "57. PALS Guidelines",
                                "duration": "53:50",
                                "url": "http://localhost:5005/stream/3113795597/81",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/81"
                            },
                            {
                                "id": "82",
                                "title": "paedia ed6 @marrowedition6notes .pdf",
                                "duration": "0:00",
                                "url": "http://localhost:5005/stream/3113795597/82",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/82"
                            }
                        ]
                    },
                    {
                        "id": "anaesthesiology",
                        "name": "Anaesthesiology",
                        "lectures": [
                            {
                                "id": "23",
                                "title": "tickle-tickle-happily.mp4",
                                "duration": "0:04",
                                "url": "http://localhost:5005/stream/3113795597/23",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/23"
                            },
                            {
                                "id": "25",
                                "title": "01.How to approach  pediatrics edition 06",
                                "duration": "6:58",
                                "url": "http://localhost:5005/stream/3113795597/25",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/25"
                            },
                            {
                                "id": "26",
                                "title": "02.Normal Newborn",
                                "duration": "29:14",
                                "url": "http://localhost:5005/stream/3113795597/26",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/26"
                            },
                            {
                                "id": "27",
                                "title": "03.Routine Newborn Care",
                                "duration": "47:15",
                                "url": "http://localhost:5005/stream/3113795597/27",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/27"
                            },
                            {
                                "id": "28",
                                "title": "04.Management of LBW Babies",
                                "duration": "46:01",
                                "url": "http://localhost:5005/stream/3113795597/28",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/28"
                            },
                            {
                                "id": "29",
                                "title": "05.Neonatal Resuscitation",
                                "duration": "39:40",
                                "url": "http://localhost:5005/stream/3113795597/29",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/29"
                            },
                            {
                                "id": "30",
                                "title": "06.Infections in neonates",
                                "duration": "31:02",
                                "url": "http://localhost:5005/stream/3113795597/30",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/30"
                            },
                            {
                                "id": "31",
                                "title": "07.Birth asphyxia,HIE and neonatal seizures",
                                "duration": "37:56",
                                "url": "http://localhost:5005/stream/3113795597/31",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/31"
                            },
                            {
                                "id": "32",
                                "title": "08. NEC",
                                "duration": "21:31",
                                "url": "http://localhost:5005/stream/3113795597/32",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/32"
                            },
                            {
                                "id": "33",
                                "title": "09.Respiratory distress in newborn",
                                "duration": "68:31",
                                "url": "http://localhost:5005/stream/3113795597/33",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/33"
                            },
                            {
                                "id": "34",
                                "title": "10.Neonatal hypoglycemia and infant of diabetic mother",
                                "duration": "21:57",
                                "url": "http://localhost:5005/stream/3113795597/34",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/34"
                            },
                            {
                                "id": "35",
                                "title": "11.Neonatal jaundice",
                                "duration": "55:52",
                                "url": "http://localhost:5005/stream/3113795597/35",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/35"
                            },
                            {
                                "id": "36",
                                "title": "12.Normal Growth",
                                "duration": "53:23",
                                "url": "http://localhost:5005/stream/3113795597/36",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/36"
                            },
                            {
                                "id": "37",
                                "title": "13. Abnormalities in head size and shape",
                                "duration": "50:11",
                                "url": "http://localhost:5005/stream/3113795597/37",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/37"
                            },
                            {
                                "id": "38",
                                "title": "14. Short stature",
                                "duration": "37:07",
                                "url": "http://localhost:5005/stream/3113795597/38",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/38"
                            },
                            {
                                "id": "39",
                                "title": "15.Normal development",
                                "duration": "56:10",
                                "url": "http://localhost:5005/stream/3113795597/39",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/39"
                            },
                            {
                                "id": "40",
                                "title": "16. Disorders of development",
                                "duration": "19:02",
                                "url": "http://localhost:5005/stream/3113795597/40",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/40"
                            },
                            {
                                "id": "41",
                                "title": "17.Behavioural disorders in children",
                                "duration": "40:48",
                                "url": "http://localhost:5005/stream/3113795597/41",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/41"
                            },
                            {
                                "id": "42",
                                "title": "18. Breastfeeding",
                                "duration": "38:42",
                                "url": "http://localhost:5005/stream/3113795597/42",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/42"
                            },
                            {
                                "id": "43",
                                "title": "19. Malnutrition",
                                "duration": "71:03",
                                "url": "http://localhost:5005/stream/3113795597/43",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/43"
                            },
                            {
                                "id": "44",
                                "title": "20. Rickets and scurvy",
                                "duration": "54:04",
                                "url": "http://localhost:5005/stream/3113795597/44",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/44"
                            },
                            {
                                "id": "45",
                                "title": "21.Genetic disorders",
                                "duration": "84:37",
                                "url": "http://localhost:5005/stream/3113795597/45",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/45"
                            },
                            {
                                "id": "46",
                                "title": "22. Common childhood infections",
                                "duration": "54:15",
                                "url": "http://localhost:5005/stream/3113795597/46",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/46"
                            },
                            {
                                "id": "47",
                                "title": "23. TORCH Infections",
                                "duration": "49:32",
                                "url": "http://localhost:5005/stream/3113795597/47",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/47"
                            },
                            {
                                "id": "48",
                                "title": "24. COVID-19 in children",
                                "duration": "29:38",
                                "url": "http://localhost:5005/stream/3113795597/48",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/48"
                            },
                            {
                                "id": "49",
                                "title": "25. Gastrointestinal anomalies",
                                "duration": "49:13",
                                "url": "http://localhost:5005/stream/3113795597/49",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/49"
                            },
                            {
                                "id": "50",
                                "title": "26. Diarrhoea",
                                "duration": "37:45",
                                "url": "http://localhost:5005/stream/3113795597/50",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/50"
                            },
                            {
                                "id": "51",
                                "title": "27. Miscellaneous topics in GIT",
                                "duration": "38:49",
                                "url": "http://localhost:5005/stream/3113795597/51",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/51"
                            },
                            {
                                "id": "52",
                                "title": "28. Neonatal Cholestasis",
                                "duration": "44:38",
                                "url": "http://localhost:5005/stream/3113795597/52",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/52"
                            },
                            {
                                "id": "53",
                                "title": "29. Metabolic Liver Disorders",
                                "duration": "71:12",
                                "url": "http://localhost:5005/stream/3113795597/53",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/53"
                            },
                            {
                                "id": "54",
                                "title": "30. Upper airway disorders",
                                "duration": "22:56",
                                "url": "http://localhost:5005/stream/3113795597/54",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/54"
                            },
                            {
                                "id": "55",
                                "title": "31. Foreign body, congenital lung anomalies and asthma",
                                "duration": "50:23",
                                "url": "http://localhost:5005/stream/3113795597/55",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/55"
                            },
                            {
                                "id": "56",
                                "title": "32. Lower respiratory tract infection",
                                "duration": "35:12",
                                "url": "http://localhost:5005/stream/3113795597/56",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/56"
                            },
                            {
                                "id": "57",
                                "title": "33 . Cystic fibrosis",
                                "duration": "30:32",
                                "url": "http://localhost:5005/stream/3113795597/57",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/57"
                            },
                            {
                                "id": "58",
                                "title": "34. Fetal circulation and introduction to congenital heart disease",
                                "duration": "42:16",
                                "url": "http://localhost:5005/stream/3113795597/58",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/58"
                            },
                            {
                                "id": "59",
                                "title": "35. Acynotic congenital heart defects",
                                "duration": "74:28",
                                "url": "http://localhost:5005/stream/3113795597/59",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/59"
                            },
                            {
                                "id": "60",
                                "title": "36. Cyanotic congenital heart defects",
                                "duration": "89:48",
                                "url": "http://localhost:5005/stream/3113795597/60",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/60"
                            },
                            {
                                "id": "61",
                                "title": "37. Acute rheumatic fever",
                                "duration": "41:52",
                                "url": "http://localhost:5005/stream/3113795597/61",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/61"
                            },
                            {
                                "id": "62",
                                "title": "38. Congenital anomalies of kidney and urinary tract",
                                "duration": "54:59",
                                "url": "http://localhost:5005/stream/3113795597/62",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/62"
                            },
                            {
                                "id": "63",
                                "title": "39. Glomerulonephritis",
                                "duration": "24:08",
                                "url": "http://localhost:5005/stream/3113795597/63",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/63"
                            },
                            {
                                "id": "64",
                                "title": "40. Nephrotic syndrome",
                                "duration": "36:18",
                                "url": "http://localhost:5005/stream/3113795597/64",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/64"
                            },
                            {
                                "id": "65",
                                "title": "41. Inherited tubular disorders",
                                "duration": "21:04",
                                "url": "http://localhost:5005/stream/3113795597/65",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/65"
                            },
                            {
                                "id": "66",
                                "title": "42. Acute kidney injury and chronic kidney disease",
                                "duration": "49:40",
                                "url": "http://localhost:5005/stream/3113795597/66",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/66"
                            },
                            {
                                "id": "67",
                                "title": "43. Congenital anomalies and hydrocephalus",
                                "duration": "58:07",
                                "url": "http://localhost:5005/stream/3113795597/67",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/67"
                            },
                            {
                                "id": "68",
                                "title": "44. Seizure disorders and epilepsy",
                                "duration": "50:27",
                                "url": "http://localhost:5005/stream/3113795597/68",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/68"
                            },
                            {
                                "id": "69",
                                "title": "45. Cerebral Palsy and CNS infections",
                                "duration": "56:27",
                                "url": "http://localhost:5005/stream/3113795597/69",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/69"
                            },
                            {
                                "id": "70",
                                "title": "46. Neuromuscular Disorders",
                                "duration": "73:30",
                                "url": "http://localhost:5005/stream/3113795597/70",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/70"
                            },
                            {
                                "id": "71",
                                "title": "47. Growth hormone deficiency and hypothyroidism",
                                "duration": "43:49",
                                "url": "http://localhost:5005/stream/3113795597/71",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/71"
                            },
                            {
                                "id": "72",
                                "title": "48. Adrenal disorders",
                                "duration": "48:23",
                                "url": "http://localhost:5005/stream/3113795597/72",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/72"
                            },
                            {
                                "id": "73",
                                "title": "49. Pubertal Disorders",
                                "duration": "30:58",
                                "url": "http://localhost:5005/stream/3113795597/73",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/73"
                            },
                            {
                                "id": "74",
                                "title": "50. Hematological Melagnancies",
                                "duration": "69:33",
                                "url": "http://localhost:5005/stream/3113795597/74",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/74"
                            },
                            {
                                "id": "75",
                                "title": "51. Solid tumor in children",
                                "duration": "35:58",
                                "url": "http://localhost:5005/stream/3113795597/75",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/75"
                            },
                            {
                                "id": "76",
                                "title": "52. Rheumatic diseases of childhood",
                                "duration": "58:56",
                                "url": "http://localhost:5005/stream/3113795597/76",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/76"
                            },
                            {
                                "id": "77",
                                "title": "53. Approach to anemia in children and nutritional anemia",
                                "duration": "42:10",
                                "url": "http://localhost:5005/stream/3113795597/77",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/77"
                            },
                            {
                                "id": "78",
                                "title": "54. Congenital anomalies and hydrocephalus",
                                "duration": "51:11",
                                "url": "http://localhost:5005/stream/3113795597/78",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/78"
                            },
                            {
                                "id": "79",
                                "title": "55. Bleeding disorders",
                                "duration": "20:47",
                                "url": "http://localhost:5005/stream/3113795597/79",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/79"
                            },
                            {
                                "id": "80",
                                "title": "56. Shock",
                                "duration": "20:26",
                                "url": "http://localhost:5005/stream/3113795597/80",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/80"
                            },
                            {
                                "id": "81",
                                "title": "57. PALS Guidelines",
                                "duration": "53:50",
                                "url": "http://localhost:5005/stream/3113795597/81",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/81"
                            },
                            {
                                "id": "82",
                                "title": "paedia ed6 @marrowedition6notes .pdf",
                                "duration": "0:00",
                                "url": "http://localhost:5005/stream/3113795597/82",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/82"
                            }
                        ]
                    },
                    {
                        "id": "dermatology",
                        "name": "Dermatology",
                        "lectures": [
                            {
                                "id": "23",
                                "title": "tickle-tickle-happily.mp4",
                                "duration": "0:04",
                                "url": "http://localhost:5005/stream/3113795597/23",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/23"
                            },
                            {
                                "id": "25",
                                "title": "01.How to approach  pediatrics edition 06",
                                "duration": "6:58",
                                "url": "http://localhost:5005/stream/3113795597/25",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/25"
                            },
                            {
                                "id": "26",
                                "title": "02.Normal Newborn",
                                "duration": "29:14",
                                "url": "http://localhost:5005/stream/3113795597/26",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/26"
                            },
                            {
                                "id": "27",
                                "title": "03.Routine Newborn Care",
                                "duration": "47:15",
                                "url": "http://localhost:5005/stream/3113795597/27",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/27"
                            },
                            {
                                "id": "28",
                                "title": "04.Management of LBW Babies",
                                "duration": "46:01",
                                "url": "http://localhost:5005/stream/3113795597/28",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/28"
                            },
                            {
                                "id": "29",
                                "title": "05.Neonatal Resuscitation",
                                "duration": "39:40",
                                "url": "http://localhost:5005/stream/3113795597/29",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/29"
                            },
                            {
                                "id": "30",
                                "title": "06.Infections in neonates",
                                "duration": "31:02",
                                "url": "http://localhost:5005/stream/3113795597/30",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/30"
                            },
                            {
                                "id": "31",
                                "title": "07.Birth asphyxia,HIE and neonatal seizures",
                                "duration": "37:56",
                                "url": "http://localhost:5005/stream/3113795597/31",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/31"
                            },
                            {
                                "id": "32",
                                "title": "08. NEC",
                                "duration": "21:31",
                                "url": "http://localhost:5005/stream/3113795597/32",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/32"
                            },
                            {
                                "id": "33",
                                "title": "09.Respiratory distress in newborn",
                                "duration": "68:31",
                                "url": "http://localhost:5005/stream/3113795597/33",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/33"
                            },
                            {
                                "id": "34",
                                "title": "10.Neonatal hypoglycemia and infant of diabetic mother",
                                "duration": "21:57",
                                "url": "http://localhost:5005/stream/3113795597/34",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/34"
                            },
                            {
                                "id": "35",
                                "title": "11.Neonatal jaundice",
                                "duration": "55:52",
                                "url": "http://localhost:5005/stream/3113795597/35",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/35"
                            },
                            {
                                "id": "36",
                                "title": "12.Normal Growth",
                                "duration": "53:23",
                                "url": "http://localhost:5005/stream/3113795597/36",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/36"
                            },
                            {
                                "id": "37",
                                "title": "13. Abnormalities in head size and shape",
                                "duration": "50:11",
                                "url": "http://localhost:5005/stream/3113795597/37",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/37"
                            },
                            {
                                "id": "38",
                                "title": "14. Short stature",
                                "duration": "37:07",
                                "url": "http://localhost:5005/stream/3113795597/38",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/38"
                            },
                            {
                                "id": "39",
                                "title": "15.Normal development",
                                "duration": "56:10",
                                "url": "http://localhost:5005/stream/3113795597/39",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/39"
                            },
                            {
                                "id": "40",
                                "title": "16. Disorders of development",
                                "duration": "19:02",
                                "url": "http://localhost:5005/stream/3113795597/40",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/40"
                            },
                            {
                                "id": "41",
                                "title": "17.Behavioural disorders in children",
                                "duration": "40:48",
                                "url": "http://localhost:5005/stream/3113795597/41",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/41"
                            },
                            {
                                "id": "42",
                                "title": "18. Breastfeeding",
                                "duration": "38:42",
                                "url": "http://localhost:5005/stream/3113795597/42",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/42"
                            },
                            {
                                "id": "43",
                                "title": "19. Malnutrition",
                                "duration": "71:03",
                                "url": "http://localhost:5005/stream/3113795597/43",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/43"
                            },
                            {
                                "id": "44",
                                "title": "20. Rickets and scurvy",
                                "duration": "54:04",
                                "url": "http://localhost:5005/stream/3113795597/44",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/44"
                            },
                            {
                                "id": "45",
                                "title": "21.Genetic disorders",
                                "duration": "84:37",
                                "url": "http://localhost:5005/stream/3113795597/45",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/45"
                            },
                            {
                                "id": "46",
                                "title": "22. Common childhood infections",
                                "duration": "54:15",
                                "url": "http://localhost:5005/stream/3113795597/46",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/46"
                            },
                            {
                                "id": "47",
                                "title": "23. TORCH Infections",
                                "duration": "49:32",
                                "url": "http://localhost:5005/stream/3113795597/47",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/47"
                            },
                            {
                                "id": "48",
                                "title": "24. COVID-19 in children",
                                "duration": "29:38",
                                "url": "http://localhost:5005/stream/3113795597/48",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/48"
                            },
                            {
                                "id": "49",
                                "title": "25. Gastrointestinal anomalies",
                                "duration": "49:13",
                                "url": "http://localhost:5005/stream/3113795597/49",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/49"
                            },
                            {
                                "id": "50",
                                "title": "26. Diarrhoea",
                                "duration": "37:45",
                                "url": "http://localhost:5005/stream/3113795597/50",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/50"
                            },
                            {
                                "id": "51",
                                "title": "27. Miscellaneous topics in GIT",
                                "duration": "38:49",
                                "url": "http://localhost:5005/stream/3113795597/51",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/51"
                            },
                            {
                                "id": "52",
                                "title": "28. Neonatal Cholestasis",
                                "duration": "44:38",
                                "url": "http://localhost:5005/stream/3113795597/52",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/52"
                            },
                            {
                                "id": "53",
                                "title": "29. Metabolic Liver Disorders",
                                "duration": "71:12",
                                "url": "http://localhost:5005/stream/3113795597/53",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/53"
                            },
                            {
                                "id": "54",
                                "title": "30. Upper airway disorders",
                                "duration": "22:56",
                                "url": "http://localhost:5005/stream/3113795597/54",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/54"
                            },
                            {
                                "id": "55",
                                "title": "31. Foreign body, congenital lung anomalies and asthma",
                                "duration": "50:23",
                                "url": "http://localhost:5005/stream/3113795597/55",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/55"
                            },
                            {
                                "id": "56",
                                "title": "32. Lower respiratory tract infection",
                                "duration": "35:12",
                                "url": "http://localhost:5005/stream/3113795597/56",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/56"
                            },
                            {
                                "id": "57",
                                "title": "33 . Cystic fibrosis",
                                "duration": "30:32",
                                "url": "http://localhost:5005/stream/3113795597/57",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/57"
                            },
                            {
                                "id": "58",
                                "title": "34. Fetal circulation and introduction to congenital heart disease",
                                "duration": "42:16",
                                "url": "http://localhost:5005/stream/3113795597/58",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/58"
                            },
                            {
                                "id": "59",
                                "title": "35. Acynotic congenital heart defects",
                                "duration": "74:28",
                                "url": "http://localhost:5005/stream/3113795597/59",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/59"
                            },
                            {
                                "id": "60",
                                "title": "36. Cyanotic congenital heart defects",
                                "duration": "89:48",
                                "url": "http://localhost:5005/stream/3113795597/60",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/60"
                            },
                            {
                                "id": "61",
                                "title": "37. Acute rheumatic fever",
                                "duration": "41:52",
                                "url": "http://localhost:5005/stream/3113795597/61",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/61"
                            },
                            {
                                "id": "62",
                                "title": "38. Congenital anomalies of kidney and urinary tract",
                                "duration": "54:59",
                                "url": "http://localhost:5005/stream/3113795597/62",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/62"
                            },
                            {
                                "id": "63",
                                "title": "39. Glomerulonephritis",
                                "duration": "24:08",
                                "url": "http://localhost:5005/stream/3113795597/63",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/63"
                            },
                            {
                                "id": "64",
                                "title": "40. Nephrotic syndrome",
                                "duration": "36:18",
                                "url": "http://localhost:5005/stream/3113795597/64",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/64"
                            },
                            {
                                "id": "65",
                                "title": "41. Inherited tubular disorders",
                                "duration": "21:04",
                                "url": "http://localhost:5005/stream/3113795597/65",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/65"
                            },
                            {
                                "id": "66",
                                "title": "42. Acute kidney injury and chronic kidney disease",
                                "duration": "49:40",
                                "url": "http://localhost:5005/stream/3113795597/66",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/66"
                            },
                            {
                                "id": "67",
                                "title": "43. Congenital anomalies and hydrocephalus",
                                "duration": "58:07",
                                "url": "http://localhost:5005/stream/3113795597/67",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/67"
                            },
                            {
                                "id": "68",
                                "title": "44. Seizure disorders and epilepsy",
                                "duration": "50:27",
                                "url": "http://localhost:5005/stream/3113795597/68",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/68"
                            },
                            {
                                "id": "69",
                                "title": "45. Cerebral Palsy and CNS infections",
                                "duration": "56:27",
                                "url": "http://localhost:5005/stream/3113795597/69",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/69"
                            },
                            {
                                "id": "70",
                                "title": "46. Neuromuscular Disorders",
                                "duration": "73:30",
                                "url": "http://localhost:5005/stream/3113795597/70",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/70"
                            },
                            {
                                "id": "71",
                                "title": "47. Growth hormone deficiency and hypothyroidism",
                                "duration": "43:49",
                                "url": "http://localhost:5005/stream/3113795597/71",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/71"
                            },
                            {
                                "id": "72",
                                "title": "48. Adrenal disorders",
                                "duration": "48:23",
                                "url": "http://localhost:5005/stream/3113795597/72",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/72"
                            },
                            {
                                "id": "73",
                                "title": "49. Pubertal Disorders",
                                "duration": "30:58",
                                "url": "http://localhost:5005/stream/3113795597/73",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/73"
                            },
                            {
                                "id": "74",
                                "title": "50. Hematological Melagnancies",
                                "duration": "69:33",
                                "url": "http://localhost:5005/stream/3113795597/74",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/74"
                            },
                            {
                                "id": "75",
                                "title": "51. Solid tumor in children",
                                "duration": "35:58",
                                "url": "http://localhost:5005/stream/3113795597/75",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/75"
                            },
                            {
                                "id": "76",
                                "title": "52. Rheumatic diseases of childhood",
                                "duration": "58:56",
                                "url": "http://localhost:5005/stream/3113795597/76",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/76"
                            },
                            {
                                "id": "77",
                                "title": "53. Approach to anemia in children and nutritional anemia",
                                "duration": "42:10",
                                "url": "http://localhost:5005/stream/3113795597/77",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/77"
                            },
                            {
                                "id": "78",
                                "title": "54. Congenital anomalies and hydrocephalus",
                                "duration": "51:11",
                                "url": "http://localhost:5005/stream/3113795597/78",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/78"
                            },
                            {
                                "id": "79",
                                "title": "55. Bleeding disorders",
                                "duration": "20:47",
                                "url": "http://localhost:5005/stream/3113795597/79",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/79"
                            },
                            {
                                "id": "80",
                                "title": "56. Shock",
                                "duration": "20:26",
                                "url": "http://localhost:5005/stream/3113795597/80",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/80"
                            },
                            {
                                "id": "81",
                                "title": "57. PALS Guidelines",
                                "duration": "53:50",
                                "url": "http://localhost:5005/stream/3113795597/81",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/81"
                            },
                            {
                                "id": "82",
                                "title": "paedia ed6 @marrowedition6notes .pdf",
                                "duration": "0:00",
                                "url": "http://localhost:5005/stream/3113795597/82",
                                "thumbnailUrl": "http://localhost:5005/thumb/3113795597/82"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": "prepladder",
        "name": "Prepladder",
        "years": []
    },
    {
        "id": "egurukul",
        "name": "E-Gurukul",
        "years": []
    }
]
};
