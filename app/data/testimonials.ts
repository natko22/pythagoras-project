export type Testimonial = {
  name: string;
  country: string;
  review: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sophie Martin",
    country: "France",
    review:
      "I started learning Greek because of my family background, but I struggled to find a teacher who could adapt lessons to my level. From the very first lesson, Pythagoras made me feel comfortable and confident. His lessons are well structured, but they never feel boring or overwhelming. He explains grammar clearly and always connects it to real-life situations. After just a few months, I was able to have conversations with my relatives in Greece for the first time. I highly recommend him to anyone looking for a patient and knowledgeable teacher.",
  },

  {
    name: "James Wilson",
    country: "England",
    review:
      "I began taking Greek lessons before a trip to Athens and honestly expected to learn only a few useful phrases. Instead, I found myself genuinely enjoying the language and continuing lessons long after my holiday. Pythagoras has a great way of making lessons engaging and relevant to your goals. He is professional, encouraging, and incredibly patient. What I appreciate most is that he adapts every lesson to my interests and learning style rather than following a generic textbook approach.",
  },

  {
    name: "Marco Bianchi",
    country: "Italy",
    review:
      "I was preparing for the Ellinomatheia examinations and needed a teacher who could help me improve both my grammar and my confidence in speaking. Pythagoras exceeded my expectations. His background in Classics and literature gives him a deep understanding of the language, but he explains everything in a simple and approachable way. The lessons were always enjoyable, and I felt supported throughout my preparation. Thanks to his guidance, I achieved my goal and developed a real appreciation for Greek language and culture.",
  },
];
