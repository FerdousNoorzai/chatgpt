import React from "react";

export default function Formation() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
  return (
    <>
      <article>
        <header className=" bg-gold sans-serif " >
          <div class="mw9 center pa4 pt5-ns ph7-l">
            <time class="f6 mb2 dib ttu tracked">
              <large>{day}/ {month}/ {year}</large>
            </time>
            <h3 class="f2 f1-m f-headline-l-narrow lh-title mv0">
              <span class="bg-black-90 lh-copy white pa1 tracked-tight">
                Do we really need to learn ChatGPT today?
              </span>
            </h3>
            <h4 class="f3 fw1 georgia i">
              A short note on what ChatGPT is and its impact on human beings.
            </h4>
            <h5 class="f6 ttu tracked black-80">By Ferdous Noorzai</h5>
          </div>
        </header>
        <div className="pa4 ph7-l  w-100 ">
          <p class="f5 f4-ns lh-copy  georgia">
          ARTIFICIAL intelligence has been all over the news in the past few years. Even so, in recent months the drumbeat has reached a crescendo, largely because an AI-powered chatbot called ChatGPT has taken the world by storm with its ability to generate fluent text and confidently answer all manner of questions. All of which has people wondering whether AIs have reached a turning point.
          </p>
          <p class="f5 f4-ns lh-copy georgia">
          The current system behind ChatGPT is a large language model called GPT-3.5, which consists of an artificial neural network, a series of interlinked processing units that allow for programs that can learn. Nothing unusual there. What surprised many, however, is the extent of the abilities of the latest version, GPT-4. In March, Microsoft researchers, who were given access to the system by OpenAI, which makes it, argued that by showing prowess on tasks beyond those it was trained on, as well as producing convincing language, GPT-4 displays “sparks” of artificial general intelligence. That is a long-held goal for AI research, often thought of as the ability to do anything that humans can do. Many experts pushed back, arguing that it is a long way from human-like intelligence.
          </p>
          <p class="f5 f4-ns lh-copy georgia">
          So just how intelligent are these AIs, and what does their rise mean for us? Few are better placed to answer that than Melanie Mitchell, a professor at the Santa Fe Institute in New Mexico and author of the book Artificial Intelligence: A guide for thinking humans. Mitchell spoke to New Scientist about the wave of attention AI is getting, the challenges in evaluating how smart GPT-4 really is, and why AI is constantly forcing us …

          </p>
          <p class="f5 f4-ns lh-copy georgia">
          To many AI practitioners and consumers, explainability is a precondition of AI use. A model that, without showing its work, tells a doctor what medicine to prescribe may be mistrusted. No experienced professional — particularly in a rigorous, evidence-based field such as medicine — wants to be assigned a course of action that they do not understand.

          </p>
          <p class="f5 f4-ns lh-copy georgia">
          Explainability is also important for legal and ethical reasons. Under the General Data Protection Regulation (GDPR) in EU law, individuals have the right to know why automated systems make certain decisions about them, and to challenge those decisions if unfair or discriminatory. GDPR can also be called on to stop algorithms from propagating unfair biases in the underlying data.

          </p>
          <p class="f5 f4-ns lh-copy georgia">
          As explainability has become an academic field unto itself, the conversation has become more nuanced. In 2021 Nigam Shah, Stanford professor of Medicine and Biomedical Data Science, was interviewed by Katherine Miller of Stanford HAI (Human-Centered Artificial Intelligence). Shah argued that doctors routinely offer treatments without knowing how or why they work — acetaminophen, or Tylenol, is one such treatment. “But we still use them because we have convinced ourselves via randomized control trials that they are beneficial.”

          </p>
          <p class="f5 f4-ns lh-copy georgia">
          Fast-forward two years: large language models (LLMs) such as GPT-4 can do multipart tasks with uncanny accuracy. These are complex machine learning models, and my guess is that — even in the most optimistic case — their interpretability is limited. As casual users, we cannot understand the countless micro-decisions by which an LLM generates a discrete answer from its vast dataset. But this has not stopped us from gushing about the effectiveness of LLMs and their impact on our productivity. Forays by MIT and GitHub have already linked ChatGPT to increased productivity for both writers and programmers. For instance, “GitHub Copilot supports faster completion times, conserves developers’ mental energy, helps them focus on more satisfying work, and ultimately find more fun in the coding they do.”

          </p>
          <p class="f5 f4-ns lh-copy georgia">
          LLMs lack engineers’, causal, and trust-inducing interpratability. Why are we still comfortable using them? Do they improve our efficiency to such an extent that the conversations we had in 2021 are no longer relevant?

          </p>
          <p class="f5 f4-ns lh-copy georgia">
          Perhaps LLM users feel that the models are only performing busywork, not infringing on their particular areas of expertise. Echoing the GitHub research quoted above, the MIT paper claims that “ChatGPT mostly substitutes for worker effort rather than complementing worker skills, and restructures tasks towards idea-generation and editing and away from rough-drafting.” It’s possible that LLMs are perceived more like a model that broadly predicts tomorrow’s weather than a model that tells doctors what to prescribe or loan managers whom to reject. That said, is there a clear boundary between busywork and “real” work — work that requires emotional intelligence, involves complex decision-making, and significantly affects others’ lives? As LLMs assume more decisive roles for writers and programmers, will interpretability grow more important? And how does the framework proposed by Nigam Shah have to evolve to meet the needs of tomorrow?

          </p>
        </div>
      </article>
    </>
  );
}
