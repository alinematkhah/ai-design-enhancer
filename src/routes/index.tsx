import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Clock3,
  MessageCircle,
  Send,
  Sparkles,
  Zap,
} from "lucide-react";
import courseTime from "@/assets/course-time.jpg";
import courseInvesting from "@/assets/course-investing.jpg";
import courseCommunication from "@/assets/course-communication.jpg";
import telegramLearning from "@/assets/telegram-learning.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Daily Learning | یادگیری روزانه در تلگرام" },
      { name: "description", content: "دوره‌های کوتاه و کاربردی که هر روز به شکل کارت آموزشی در تلگرام دریافت می‌کنید." },
      { property: "og:title", content: "Daily Learning | هر روز یک گام برای تغییر بزرگ" },
      { property: "og:description", content: "یادگیری کوتاه، مستمر و کاربردی؛ مستقیم در تلگرام." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const courses = [
  { image: courseTime, category: "توسعه فردی", cards: "۲۱ کارت آموزشی", title: "هنر مدیریت زمان واقعی", description: "یاد بگیرید چطور کارهای مهم را از کارهای فوری تشخیص دهید و اولویت‌بندی کنید." },
  { image: courseInvesting, category: "اقتصاد", cards: "۱۴ کارت آموزشی", title: "سرمایه‌گذاری برای مبتدی‌ها", description: "بدون فرمول‌های پیچیده، مفاهیم اصلی بازار سرمایه را هر روز مرور کنید." },
  { image: courseCommunication, category: "مهارت نرم", cards: "۱۸ کارت آموزشی", title: "ارتباطات مؤثر در محیط کار", description: "چگونه منظورمان را دقیق برسانیم و شنونده بهتری در جلسات کاری باشیم." },
];

const features = [
  { icon: Clock3, title: "تمرکز بر یک موضوع", text: "هر کارت در کمتر از پنج دقیقه، فقط یک مفهوم روشن و قابل اجرا را آموزش می‌دهد." },
  { icon: CheckCircle2, title: "تثبیت با تکرار فاصله‌دار", text: "کارت‌ها در زمان مناسب دوباره نمایش داده می‌شوند تا آموخته‌ها در ذهن شما ماندگار شوند." },
  { icon: MessageCircle, title: "همیشه در دسترس", text: "بدون نصب برنامه‌ای تازه؛ همه چیز در همان تلگرامی است که هر روز از آن استفاده می‌کنید." },
];

function Brand() {
  return <a href="#top" className="flex items-center gap-3" aria-label="Daily Learning"><span className="grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground shadow-sm"><BookOpen className="size-4" /></span><span className="font-display text-lg font-semibold">Daily Learning</span></a>;
}

function Index() {
  return (
    <div id="top" dir="rtl" className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-5 lg:px-6">
          <Brand />
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex" aria-label="ناوبری اصلی">
            <a className="transition-colors hover:text-primary" href="#courses">دوره‌ها</a>
            <a className="transition-colors hover:text-primary" href="#method">روش یادگیری</a>
            <a className="transition-colors hover:text-primary" href="#pricing">اشتراک ویژه</a>
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <a href="/login" className="hidden px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block">ورود</a>
            <a href="/signup" className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5"><Send className="size-4" /><span className="hidden sm:inline">عضویت در تلگرام</span><span className="sm:hidden">عضویت</span></a>
          </div>
        </div>
      </header>

      <main>
        <section className="overflow-hidden pb-20 pt-32 lg:pb-24 lg:pt-40">
          <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-5 lg:grid-cols-2 lg:px-6">
            <div className="animate-enter">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary"><span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-70" /><span className="relative inline-flex size-2 rounded-full bg-primary" /></span>یادگیری هوشمند در تلگرام</div>
              <h1 className="font-display text-4xl font-semibold leading-[1.2] lg:text-6xl">هر روز فقط یک گام برای <span className="text-primary">تغییر بزرگ</span></h1>
              <p className="mt-6 max-w-[50ch] leading-8 text-muted-foreground">آموزش‌های پیچیده را به لقمه‌های کوچک روزانه تبدیل کرده‌ایم. بدون نیاز به نصب برنامه‌ای تازه، مستقیم در پیام‌رسان محبوب‌تان یاد بگیرید.</p>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <a href="/signup" className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground shadow-xl shadow-primary/20 transition-transform hover:-translate-y-0.5"><Zap className="size-5" />شروع یادگیری رایگان</a>
                <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground"><span className="flex -space-x-3 space-x-reverse"><i className="size-9 rounded-full border-2 border-background bg-accent" /><i className="size-9 rounded-full border-2 border-background bg-primary/35" /><i className="size-9 rounded-full border-2 border-background bg-foreground/20" /></span>+۱۲ هزار یادگیرنده</div>
              </div>
            </div>

            <div className="relative mx-auto aspect-square w-full max-w-[460px]" aria-label="نمونه کارت‌های آموزشی روزانه">
              <div className="absolute inset-12 rounded-full bg-primary/10 blur-3xl" />
              <div className="anim-drift absolute right-4 top-3 z-20 w-[72%] rounded-2xl border border-border/60 bg-card/90 p-5 shadow-2xl shadow-foreground/10 backdrop-blur-md">
                <div className="mb-5 flex items-center gap-3"><span className="grid size-11 place-items-center rounded-xl bg-primary/10 font-display font-bold text-primary">۰۱</span><div><div className="text-[10px] font-semibold text-muted-foreground">درس امروز</div><div className="font-semibold">اصول تفکر انتقادی</div></div></div>
                <div className="h-2 overflow-hidden rounded-full bg-muted"><div className="h-full w-2/3 rounded-full bg-primary" /></div><div className="mt-2 flex justify-between text-[10px] font-medium text-muted-foreground"><span>پیشرفت کل دوره</span><span>۶۵٪</span></div>
              </div>
              <div className="anim-drift-b absolute bottom-9 left-1 z-10 w-[64%] rounded-2xl border border-foreground/10 bg-foreground p-6 text-background shadow-2xl"><div className="mb-2 text-xs font-bold text-accent">تکنیک روز</div><p className="text-lg font-medium leading-8">چطور از خطای شناختی «تأیید» دوری کنیم؟</p><div className="mt-5 flex items-center justify-between"><span className="flex gap-1"><i className="size-1.5 rounded-full bg-accent" /><i className="size-1.5 rounded-full bg-background/20" /><i className="size-1.5 rounded-full bg-background/20" /></span><span className="text-[10px] text-background/55">۳ دقیقه مطالعه</span></div></div>
            </div>
          </div>
        </section>

        <section id="courses" className="border-y border-border/70 bg-card py-20 lg:py-24">
          <div className="mx-auto max-w-[1200px] px-5 lg:px-6">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end lg:mb-14"><div className="max-w-[58ch]"><p className="mb-3 text-sm font-semibold text-primary">مسیر مناسب شما</p><h2 className="font-display text-3xl font-semibold leading-tight">دوره‌هایی سازگار با سبک زندگی شما</h2><p className="mt-4 leading-7 text-muted-foreground">موضوعاتی که واقعاً به آن‌ها نیاز دارید؛ در بسته‌های آموزشی کوتاه و کاربردی.</p></div><a href="/marketplace" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">مشاهده همه دوره‌ها <ArrowLeft className="size-4" /></a></div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{courses.map((course) => <article key={course.title} className="group"><a href="/marketplace" className="block"><div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted"><img src={course.image} alt="" loading="lazy" width={944} height={704} className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></div><div className="mb-3 mt-5 flex items-center gap-3 text-[11px] font-medium"><span className="font-bold text-primary">{course.category}</span><span className="size-1 rounded-full bg-border" /><span className="text-muted-foreground">{course.cards}</span></div><h3 className="text-xl font-semibold transition-colors group-hover:text-primary">{course.title}</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">{course.description}</p></a></article>)}</div>
          </div>
        </section>

        <section id="method" className="bg-foreground py-20 text-background lg:py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-6">
            <div className="mx-auto w-full max-w-[430px] overflow-hidden rounded-3xl border border-background/10 bg-background/5"><img src={telegramLearning} alt="نمونه دریافت کارت آموزشی در تلگرام" loading="lazy" width={768} height={1024} className="aspect-[3/4] w-full object-cover" /></div>
            <div><p className="mb-3 text-sm font-semibold text-accent">طراحی‌شده برای ماندگاری</p><h2 className="font-display text-3xl font-semibold leading-tight">چرا یادگیری روزانه مؤثرتر است؟</h2><div className="mt-11 space-y-9">{features.map(({ icon: Icon, title, text }) => <div key={title} className="flex gap-5"><span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-background/10 bg-background/5"><Icon className="size-6 text-accent" /></span><div><h3 className="text-lg font-semibold">{title}</h3><p className="mt-2 max-w-[42ch] text-sm leading-7 text-background/60">{text}</p></div></div>)}</div></div>
          </div>
        </section>

        <section id="pricing" className="py-20 lg:py-24"><div className="mx-auto max-w-[820px] px-5 text-center"><span className="mx-auto mb-5 grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary"><Sparkles className="size-6" /></span><h2 className="font-display text-3xl font-semibold">همین حالا مسیر یادگیری خود را بسازید</h2><p className="mx-auto mt-5 max-w-[60ch] leading-8 text-muted-foreground">به جمع هزاران یادگیرنده‌ای بپیوندید که هر روز با یک کارت تازه، دنیای خود را بزرگ‌تر می‌کنند.</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><a href="/signup" className="inline-flex h-13 items-center justify-center rounded-full bg-primary px-8 text-lg font-semibold text-primary-foreground shadow-xl shadow-primary/20 transition-transform hover:scale-[1.02]">شروع رایگان در تلگرام</a><a href="/pricing" className="inline-flex h-13 items-center justify-center rounded-full border border-border bg-card px-8 font-semibold transition-colors hover:bg-muted">مشاهده تعرفه‌ها</a></div></div></section>
      </main>

      <footer className="border-t border-border bg-card py-10"><div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 px-5 md:flex-row lg:px-6"><Brand /><p className="text-sm text-muted-foreground">© ۱۴۰۵ تمامی حقوق برای دیلی لرنینگ محفوظ است.</p><a href="/signup" aria-label="تلگرام" className="grid size-10 place-items-center rounded-full border border-border text-primary transition-colors hover:bg-primary hover:text-primary-foreground"><Send className="size-5" /></a></div></footer>
    </div>
  );
}