// app/primary/data.ts

export interface Notebook {
  name: string;
  quantity: number;
  pages: any;
}

export interface YearData {
  notebooks: Notebook[];
  writing_tools: string[];
  geometry_tools: string[];
}

export interface EducationData {
  primary: Record<string, YearData>;
  middle: Record<string, YearData>;
}

export const educationData: EducationData = {
  primary: {
    year1: {
      notebooks: [
        { name: "كراس اللغة العربية", quantity: 1, pages: 32 },
        { name: "كراس الرياضيات", quantity: 1, pages: 32 },
        { name: "كراس التربية العلمية والتكنولوجية", quantity: 1, pages: 48 },
        { name: "كراس التربية الإسلامية", quantity: 1, pages: 48 },
        { name: "كراس التربية المدنية", quantity: 1, pages: 48 },
        { name: "كراس التربية الفنية", quantity: 1, pages: 48 },
        { name: "كراس المحاولات", quantity: 1, pages: 48 },
        { name: "كراس اللغة الفرنسية", quantity: 1, pages: 32 },
      ],
      writing_tools: [
        "أقلام رصاص (HB)",
        "ممحاة",
        "مبراة",
        "أقلام تلوين خشبية (12 لونًا)",
        "علبة ألوان مائية",
        "فرشاة رسم",
        "عجينة صلصال ملونة",
      ],
      geometry_tools: ["مسطرة 20 سم"],
    },
    year2: {
      notebooks: [
        { name: "كراس اللغة العربية", quantity: 1, pages: 48 },
        { name: "كراس الرياضيات", quantity: 1, pages: 48 },
        { name: "كراس التربية العلمية والتكنولوجية", quantity: 1, pages: 32 },
        { name: "كراس التربية الإسلامية", quantity: 1, pages: 32 },
        { name: "كراس التربية المدنية", quantity: 1, pages: 32 },
        { name: "كراس التربية الفنية", quantity: 1, pages: 32 },
        { name: "كراس اللغة الفرنسية", quantity: 1, pages: 48 },
        { name: "كراس المحاولات", quantity: 1, pages: 64 },
      ],
      writing_tools: [
        "أقلام رصاص (HB)",
        "ممحاة",
        "مبراة",
        "أقلام حبر جاف (أزرق، أحمر)",
        "أقلام تلوين خشبية (12 لونًا)",
        "علبة ألوان مائية",
        "فرشاة رسم",
      ],
      geometry_tools: ["مسطرة 20 سم", "مثلث قائم الزاوية"],
    },
    year3: {
      notebooks: [
        { name: "كراس اللغة العربية", quantity: 1, pages: 64 },
        { name: "كراس الرياضيات", quantity: 1, pages: 64 },
        { name: "كراس التربية العلمية والتكنولوجية", quantity: 1, pages: 48 },
        { name: "كراس التربية الإسلامية", quantity: 1, pages: 32 },
        { name: "كراس التربية المدنية", quantity: 1, pages: 32 },
        { name: "كراس اللغة الفرنسية", quantity: 1, pages: 64 },
        { name: "كراس اللغة الإنجليزية", quantity: 1, pages: 64 },
        { name: "كراس التربية الفنية", quantity: 1, pages: 32 },
        { name: "كراس المحاولات", quantity: 1, pages: 96 },
      ],
      writing_tools: [
        "أقلام رصاص (HB)",
        "ممحاة",
        "مبراة",
        "أقلام حبر جاف (أزرق، أحمر)",
        "أقلام تلوين خشبية (12 لونًا)",
        "علبة ألوان مائية",
        "فرشاة رسم",
      ],
      geometry_tools: ["مسطرة 20 سم", "مثلث قائم الزاوية", "منقلة"],
    },
    year4: {
      notebooks: [
        { name: "كراس اللغة العربية", quantity: 1, pages: 96 },
        { name: "كراس الرياضيات", quantity: 1, pages: 96 },
        { name: "كراس التربية العلمية والتكنولوجية", quantity: 1, pages: 64 },
        { name: "كراس التربية الإسلامية", quantity: 1, pages: 48 },
        { name: "كراس التربية المدنية", quantity: 1, pages: 48 },
        { name: "كراس اللغة الفرنسية", quantity: 1, pages: 64 },
        { name: "كراس اللغة الإنجليزية", quantity: 1, pages: 64 },
        { name: "كراس التربية الفنية", quantity: 1, pages: 48 },
        { name: "كراس المحاولات", quantity: 1, pages: 120 },
      ],
      writing_tools: [
        "أقلام رصاص (HB)",
        "ممحاة",
        "مبراة",
        "أقلام حبر جاف (أزرق، أحمر، أسود، أخضر)",
        "أقلام تلوين خشبية (12 لونًا)",
        "علبة ألوان مائية",
        "فرشاة رسم",
      ],
      geometry_tools: ["مسطرة 30 سم", "مثلث قائم الزاوية", "منقلة", "مدور"],
    },
    year5: {
      notebooks: [
        { name: "كراس اللغة العربية", quantity: 1, pages: 96 },
        { name: "كراس الرياضيات", quantity: 1, pages: 96 },
        { name: "كراس التربية العلمية والتكنولوجية", quantity: 1, pages: 64 },
        { name: "كراس التربية الإسلامية", quantity: 1, pages: 48 },
        { name: "كراس التربية المدنية", quantity: 1, pages: 48 },
        { name: "كراس اللغة الفرنسية", quantity: 1, pages: 96 },
        { name: "كراس اللغة الإنجليزية", quantity: 1, pages: 64 },
        { name: "كراس التربية الفنية", quantity: 1, pages: 48 },
        { name: "كراس المحاولات", quantity: 1, pages: 120 },
      ],
      writing_tools: [
        "أقلام رصاص (HB)",
        "ممحاة",
        "مبراة",
        "أقلام حبر جاف (أزرق، أحمر، أسود، أخضر)",
        "أقلام تلوين خشبية (12 لونًا)",
        "علبة ألوان مائية",
        "فرشاة رسم",
      ],
      geometry_tools: [
        "مسطرة 20 سم",
        "مثلث قائم الزاوية",
        "منقلة",
        "آلة حاسبة",
      ],
    },
  },
  middle: {
    year1: {
      notebooks: [
        { name: "كراس اللغة العربية", quantity: 1, pages: 196 },
        { name: "كراس الرياضيات", quantity: 1, pages: 196 },
        { name: "كراس العلوم الطبيعية", quantity: 1, pages: 96 },
        { name: "كراس العلوم الفيزيائية والتكنولوجية", quantity: 1, pages: 96 },
        { name: "كراس اللغة الفرنسية", quantity: 1, pages: 196 },
        { name: "كراس اللغة الإنجليزية", quantity: 1, pages: 96 },
        { name: "كراس التاريخ والجغرافيا", quantity: 1, pages: 96 },
        { name: "كراس التربية الإسلامية", quantity: 1, pages: 64 },
        { name: "كراس التربية المدنية", quantity: 1, pages: 64 },
        { name: "كراس التربية الفنية", quantity: 1, pages: 48 },
        { name: "كراس المحاولات", quantity: 1, pages: 196 },
      ],
      writing_tools: [
        "أقلام حبر جاف (أزرق، أحمر، أسود، أخضر)",
        "أقلام رصاص (HB و2B)",
        "ممحاة",
        "مبراة",
        "مصحح (قلم أو شريط تصحيح)",
        "أقلام تلوين خشبية (12 لونًا على الأقل)",
        "أقلام تعليم (ماركر) بألوان مختلفة",
      ],
      geometry_tools: [
        "مسطرة 30 سم",
        "مثلث قائم الزاوية",
        "منقلة",
        "مدور",
        "آلة حاسبة علمية",
      ],
    },
    year2: {
      notebooks: [
        { name: "كراس اللغة العربية", quantity: 1, pages: 192 },
        { name: "كراس الرياضيات", quantity: 1, pages: 288 },
        { name: "كراس العلوم الطبيعية", quantity: 1, pages: 96 },
        { name: "كراس العلوم الفيزيائية والتكنولوجية", quantity: 1, pages: 288 },
        { name: "كراس اللغة الفرنسية", quantity: 1, pages: 120 },
        { name: "كراس اللغة الإنجليزية", quantity: 1, pages: 96 },
        { name: "كراس التاريخ والجغرافيا", quantity: 1, pages: 96 },
        { name: "كراس التربية الإسلامية", quantity: 1, pages: 64 },
        { name: "كراس التربية المدنية", quantity: 1, pages: 64 },
        { name: "كراس التربية الفنية", quantity: 1, pages: 48 },
        { name: "كراس المحاولات", quantity: 1, pages: 196 },
      ],
      writing_tools: [
        "أقلام حبر جاف (أزرق، أحمر، أسود، أخضر)",
        "أقلام رصاص (HB و2B)",
        "ممحاة",
        "مبراة",
        "مصحح (قلم أو شريط تصحيح)",
        "أقلام تلوين خشبية (12 لونًا على الأقل)",
        "أقلام تعليم (ماركر) بألوان مختلفة",
      ],
      geometry_tools: [
        "مسطرة 30 سم",
        "مثلث قائم الزاوية",
        "منقلة",
        "مدور",
        "آلة حاسبة علمية",
      ],
    },
    year3: {
      notebooks: [
        { name: "كراس اللغة العربية", quantity: 1, pages: 196 },
        { name: "كراس الرياضيات", quantity: 1, pages: 288 },
        { name: "كراس العلوم الطبيعية", quantity: 1, pages: 96 },
        { name: "سجل العلوم الفيزيائية والتكنولوجية", quantity: 1, pages: "3M" },
        { name: "كراس اللغة الفرنسية", quantity: 1, pages: 120 },
        { name: "كراس اللغة الإنجليزية", quantity: 1, pages: 96 },
        { name: "كراس التاريخ والجغرافيا", quantity: 1, pages: 96 },
        { name: "كراس التربية الإسلامية", quantity: 1, pages: 64 },
        { name: "كراس التربية المدنية", quantity: 1, pages: 64 },
        { name: "كراس التربية الفنية", quantity: 1, pages: 48 },
        { name: "كراس المحاولات", quantity: 1, pages: 196 },
      ],
      writing_tools: [
        "أقلام حبر جاف (أزرق، أحمر، أسود، أخضر)",
        "أقلام رصاص (HB و2B)",
        "ممحاة",
        "مبراة",
        "مصحح (قلم أو شريط تصحيح)",
        "أقلام تلوين خشبية (12 لونًا على الأقل)",
        "أقلام تعليم (ماركر) بألوان مختلفة",
      ],
      geometry_tools: [
        "مسطرة 30 سم",
        "مثلث قائم الزاوية",
        "منقلة",
        "مدور",
        "آلة حاسبة علمية",
      ],
    },
    year4: {
      notebooks: [
        { name: "كراس اللغة العربية", quantity: 1, pages: 288 },
        { name: "كراس الرياضيات", quantity: 1, pages: 288 },
        { name: "كراس العلوم الطبيعية TP", quantity: 1, pages: 96 },
        { name: "سجل العلوم الفيزيائية والتكنولوجية", quantity: 1, pages: "4M" },
        { name: "كراس اللغة الفرنسية", quantity: 1, pages: 120 },
        { name: "كراس اللغة الإنجليزية", quantity: 1, pages: 96 },
        { name: "كراس التاريخ والجغرافيا", quantity: 1, pages: 96 },
        { name: "كراس التربية الإسلامية", quantity: 1, pages: 64 },
        { name: "كراس التربية المدنية", quantity: 1, pages: 64 },
        { name: "كراس التربية الفنية", quantity: 1, pages: 48 },
        { name: "كراس المحاولات", quantity: 1, pages: 196 },
      ],
      writing_tools: [
        "أقلام حبر جاف (أزرق، أحمر، أسود، أخضر)",
        "أقلام رصاص (HB و2B)",
        "ممحاة",
        "مبراة",
        "مصحح (قلم أو شريط تصحيح)",
        "أقلام تلوين خشبية (12 لونًا على الأقل)",
        "أقلام تعليم (ماركر) بألوان مختلفة",
      ],
      geometry_tools: [
        "مسطرة 30 سم",
        "مثلث قائم الزاوية",
        "منقلة",
        "مدور",
        "آلة حاسبة علمية",
      ],
    },
  },
};
