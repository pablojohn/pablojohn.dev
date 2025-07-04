"use client"
import Typewriter from "../components/typewriter";

export default function About() {
  const words = [
    { text: "Who am I?", className: "" }
  ];

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Typewriter words={words} />
      <div className="prose prose-neutral dark:prose-invert space-y-4 text-sm my-16">
        <p>
          I'm a developer based in the Madison, Wisconsin area. I mostly work on backend systems,
          infrastructure automation, and cloud architecture — the nerdy devops kind of stuff.
        </p>

        <p>
          These days, I work at TruStage, an insurance and financial services company. Most of my
          time goes into my day job, but I’m always on the lookout for a fun side project. Lately,
          that’s mostly meant building World of Warcraft addons and little tools for my friends.
        </p>

        <p>
          I’ve been at TruStage my whole career. I started as an intern back in 2015, joined
          full-time in early 2016, and slowly worked my way up from junior developer to senior.
        </p>

        <p>
          Early on, I worked on web and mobile apps, then moved into leading feature development
          across a bunch of systems. In 2020, I stepped into a team lead role, mentoring other
          developers and helping guide projects.
        </p>

        <p>
          These days, I lead a platform-focused team that supports eight different product teams
          across the company.
        </p>

        <p>
          I’ve also done some public speaking over the years — mostly at our internal meetups, but
          I’ve spoken at a few conferences too (though it’s been a minute).
        </p>

        <p>
          Outside of work, I spend a lot of time gaming with friends — mostly World of Warcraft and
          whatever random titles we’re into at the moment. I’m also into fitness and hiking. I live
          with my wife, two energetic dogs, and more cats than we meant to adopt.
        </p>
      </div>
    </div>
  );
}
