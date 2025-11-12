export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  thumbnail: string;
  createdAt: string;
}

// Placeholder blog posts
export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "historia-tai-chi-chuan",
    title: "Historia Tai Chi Chuan",
    description:
      "Odkryj fascynującą historię Tai Chi Chuan, od starożytnych Chin po współczesne praktyki na całym świecie.",
    content: `
      <h2>Pochodzenie Tai Chi Chuan</h2>
      <p>Tai Chi Chuan, znane również jako Taijiquan, to starożytna chińska sztuka walki, która wyewoluowała w formę medytacji w ruchu. Jej korzenie sięgają dynastii Ming (1368-1644), choć niektóre źródła wskazują na jeszcze wcześniejsze początki.</p>
      
      <h3>Główne style</h3>
      <p>Istnieje pięć głównych stylów Tai Chi Chuan: Chen, Yang, Wu, Sun i Wu (Hao). Każdy styl ma swoje unikalne cechy i metody treningowe.</p>
      
      <h3>Współczesne zastosowanie</h3>
      <p>Dziś Tai Chi Chuan praktykowane jest na całym świecie jako forma ćwiczeń zdrowotnych, medytacji i sztuki walki. Badania naukowe potwierdzają jego korzyści dla zdrowia fizycznego i psychicznego.</p>
    `,
    thumbnail: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&h=600&fit=crop",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    slug: "korzysci-zdrowotne-tai-chi",
    title: "Korzyści zdrowotne Tai Chi",
    description:
      "Dowiedz się, jak regularna praktyka Tai Chi może poprawić Twoje zdrowie fizyczne i psychiczne.",
    content: `
      <h2>Korzyści fizyczne</h2>
      <p>Tai Chi poprawia równowagę, elastyczność i siłę mięśni. Regularna praktyka może pomóc w redukcji bólu stawów i poprawie postawy ciała.</p>
      
      <h3>Korzyści psychiczne</h3>
      <p>Praktyka Tai Chi redukuje stres, poprawia koncentrację i wspiera ogólne samopoczucie psychiczne. Medytacyjny aspekt ćwiczeń pomaga w osiągnięciu wewnętrznego spokoju.</p>
    `,
    thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
    createdAt: "2024-01-20",
  },
  {
    id: "3",
    slug: "podstawowe-ruch-tai-chi",
    title: "Podstawowe ruchy Tai Chi",
    description:
      "Poznaj fundamentalne ruchy i pozycje, które stanowią podstawę praktyki Tai Chi Chuan.",
    content: `
      <h2>Podstawowe pozycje</h2>
      <p>W Tai Chi istnieje wiele podstawowych pozycji, które tworzą fundament wszystkich form. Każda pozycja ma swoje znaczenie i zastosowanie.</p>
      
      <h3>Ruch przepływu</h3>
      <p>Kluczowym elementem Tai Chi jest płynność ruchów. Wszystkie pozycje przechodzą jedna w drugą w sposób ciągły i harmonijny.</p>
    `,
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    createdAt: "2024-02-01",
  },
  {
    id: "4",
    slug: "tai-chi-dla-poczatkujacych",
    title: "Tai Chi dla początkujących",
    description:
      "Przewodnik dla osób rozpoczynających swoją przygodę z Tai Chi Chuan.",
    content: `
      <h2>Jak zacząć</h2>
      <p>Rozpoczynając praktykę Tai Chi, ważne jest znalezienie dobrego nauczyciela i rozpoczęcie od podstawowych ćwiczeń.</p>
      
      <h3>Pierwsze kroki</h3>
      <p>Zacznij od krótkich sesji treningowych, stopniowo zwiększając czas i intensywność ćwiczeń.</p>
    `,
    thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop",
    createdAt: "2024-02-10",
  },
  {
    id: "5",
    slug: "filozofia-tai-chi",
    title: "Filozofia Tai Chi",
    description:
      "Zrozum głębokie filozoficzne podstawy Tai Chi Chuan i ich wpływ na praktykę.",
    content: `
      <h2>Yin i Yang</h2>
      <p>Tai Chi opiera się na koncepcji Yin i Yang - przeciwieństw, które się uzupełniają i tworzą harmonię.</p>
      
      <h3>Równowaga</h3>
      <p>Celem praktyki jest osiągnięcie równowagi między siłą a łagodnością, ruchem a spokojem.</p>
    `,
    thumbnail: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&h=600&fit=crop",
    createdAt: "2024-02-15",
  },
  {
    id: "6",
    slug: "tai-chi-w-praktyce",
    title: "Tai Chi w codziennej praktyce",
    description:
      "Jak włączyć Tai Chi do codziennej rutyny i czerpać z niego korzyści na co dzień.",
    content: `
      <h2>Codzienna praktyka</h2>
      <p>Nawet krótkie sesje Tai Chi mogą przynieść znaczące korzyści. Ważna jest regularność i konsekwencja.</p>
      
      <h3>Integracja z życiem</h3>
      <p>Zasady Tai Chi można zastosować w codziennym życiu, poprawiając jakość życia i relacje z innymi.</p>
    `,
    thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
    createdAt: "2024-02-20",
  },
  {
    id: "7",
    slug: "styl-chen-tai-chi",
    title: "Styl Chen Tai Chi",
    description:
      "Poznaj charakterystykę i historię stylu Chen, najstarszego stylu Tai Chi Chuan.",
    content: `
      <h2>Historia stylu Chen</h2>
      <p>Styl Chen jest uważany za najstarszy styl Tai Chi Chuan, wywodzący się z wioski Chen w prowincji Henan.</p>
      
      <h3>Charakterystyka</h3>
      <p>Styl Chen charakteryzuje się kombinacją powolnych, płynnych ruchów z szybkimi, eksplozywnymi technikami.</p>
    `,
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    createdAt: "2024-03-01",
  },
  {
    id: "8",
    slug: "medytacja-w-ruchu",
    title: "Medytacja w ruchu",
    description:
      "Odkryj, jak Tai Chi łączy medytację z ruchem fizycznym, tworząc unikalną praktykę duchową.",
    content: `
      <h2>Medytacyjny aspekt</h2>
      <p>Tai Chi jest często określane jako "medytacja w ruchu", łącząc świadomość umysłu z kontrolowanym ruchem ciała.</p>
      
      <h3>Świadomość i koncentracja</h3>
      <p>Praktyka wymaga pełnej koncentracji i świadomości każdego ruchu, co prowadzi do głębokiego stanu medytacyjnego.</p>
    `,
    thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop",
    createdAt: "2024-03-05",
  },
  {
    id: "9",
    slug: "tai-chi-i-stres",
    title: "Tai Chi a redukcja stresu",
    description:
      "Dowiedz się, jak praktyka Tai Chi może pomóc w radzeniu sobie ze stresem i napięciem.",
    content: `
      <h2>Redukcja stresu</h2>
      <p>Badania pokazują, że regularna praktyka Tai Chi może znacząco zmniejszyć poziom stresu i poprawić samopoczucie.</p>
      
      <h3>Mechanizmy działania</h3>
      <p>Płynne ruchy, głębokie oddychanie i medytacyjny charakter ćwiczeń wspierają układ nerwowy i redukują napięcie.</p>
    `,
    thumbnail: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&h=600&fit=crop",
    createdAt: "2024-03-10",
  },
  {
    id: "10",
    slug: "tai-chi-dla-seniorow",
    title: "Tai Chi dla seniorów",
    description:
      "Dlaczego Tai Chi jest idealną formą ćwiczeń dla osób starszych i jak może poprawić ich jakość życia.",
    content: `
      <h2>Korzyści dla seniorów</h2>
      <p>Tai Chi jest szczególnie korzystne dla osób starszych, poprawiając równowagę, elastyczność i siłę bez nadmiernego obciążenia stawów.</p>
      
      <h3>Bezpieczeństwo</h3>
      <p>Niskie ryzyko kontuzji i możliwość dostosowania intensywności sprawiają, że Tai Chi jest bezpieczne dla osób w każdym wieku.</p>
    `,
    thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
    createdAt: "2024-03-15",
  },
];

export const POSTS_PER_PAGE = 6;

export function getPaginatedPosts(page: number): {
  posts: BlogPost[];
  totalPages: number;
} {
  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const posts = BLOG_POSTS.slice(startIndex, endIndex);
  const totalPages = Math.ceil(BLOG_POSTS.length / POSTS_PER_PAGE);

  return { posts, totalPages };
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

