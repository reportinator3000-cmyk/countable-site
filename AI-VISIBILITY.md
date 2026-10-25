# AI visibility: getting CountAble recommended by AI assistants

*Draft, October 25 2026. Nothing here is published. The pages on this branch
go live only when you say "push the website branch". The site's repo is
public, so once pushed this file can be read by anyone (robots.txt keeps it
out of search results). It holds no passwords or private addresses.*

The goal: when someone asks ChatGPT, Google, Copilot, Perplexity or Claude
for "the best app for workout accountability with friends", CountAble comes
up, and what the assistant says about it is true.

## In one minute

- **This branch adds five plain pages** to getcountable.app. They cover what
  CountAble is, workout accountability with friends, how teams and the weekly
  count work, an FAQ, and pricing. Every number in them comes from the app's
  own words.
- **The crawlers can already get in.** Google, Bing, ChatGPT's search bot,
  Perplexity and Claude's bots all got the page normally on Oct 25. This
  branch adds the map they read (`sitemap.xml`) and a `robots.txt` that says
  everyone is welcome.
- **Your jobs:**
  1. Read the five pages on your phone.
  2. Say "push the website branch".
  3. Sign up for Google Search Console and Bing Webmaster Tools (section 4).
  4. Check one Cloudflare setting (section 3).
- **Expect little before launch.** Assistants rarely recommend an app that
  isn't in the App Store yet. The monthly check (section 7) starts a baseline
  now, so you can see the change after launch.

## 1. What is on this branch

| File | What it is |
|---|---|
| `what-is-countable.html` | What CountAble is, the three tabs, how a week works, what it is not |
| `workout-accountability-with-friends.html` | The question people ask, two studies with their numbers, and how CountAble does it |
| `how-teams-work.html` | Teams step by step: the three ways a team talks, invites, numbers, Sunday board, wagers, limits |
| `faq.html` | 14 short answers: cost, friends need the app, team size, Apple Watch, wagers, coach, sign-in |
| `pricing.html` | The three plans, each plan's lines copied word for word from the app's plan cards |
| `robots.txt` | Lets every crawler in, points to the sitemap, and keeps this notes file out of search results |
| `sitemap.xml` | The list of public pages for Google and Bing |
| `index.html` | Adds a LEARN MORE card linking the five pages, and sharing tags |
| `plans.html` | Basic's line now matches the app's card; adds a link to all three plans |
| `confirm.html`, `confirmed.html`, `icon-concepts.html`, `icon-sizes.html` | Marked "noindex" so these utility pages stay out of search results (they work exactly as before) |
| `style.css` | Numbered lists get the same indent as bullet lists (only the new pages use them) |

The studies cited (both checked against the journals on Oct 25):

- Wing and Jeffery, 1999: 166 people. Those who joined with friends and got
  social support finished 95% of the time, against 76%. 66% kept all the
  weight off six months later, against 24%.
- Harkin and colleagues, 2016: 138 studies, 19,951 people. Tracking progress
  helps you reach goals, and helps more when it is written down and shared.

## 2. Before you publish

Read each page once on your phone. These lines will need changing later. They
are easy to find by searching the files for the words in quotes.

**On launch day:**

- "Coming soon to the iOS App Store" → the App Store link. It is on
  `index.html`, `what-is-countable.html`,
  `workout-accountability-with-friends.html` and `pricing.html`, and
  `faq.html` says "coming soon" under "Can I download it now?".
- `pricing.html`: delete the bullet "Plans are not on sale yet".
- `watch/watch.js`: the install link (already open item #21).

**On the day texts become sign-in only (built, not live):**

- `pricing.html`: Free's line "TEN ANSWERS BY TEXT ABOUT BASIC AND PREMIUM"
  and Premium's line "PRESET REMINDERS FROM YOUR COACH, OR TEXT THEM AT ANY
  TIME FOR ADVICE" become whatever the app's plan cards then say.
- `index.html`: the feature box "Reminders & Recaps" talks about text
  reminders.
- `sms.html` is the page the phone carriers registered. Change it only with
  the carrier filing in mind.

The other pages describe the coach without saying how it reaches you, so they
stay true either way.

## 3. Can the crawlers get in? (checked Oct 25 2026)

- **robots.txt:** the live one is only Cloudflare's comment block, with no
  rules. Nothing is blocked. The new one says the same thing plainly, adds
  the sitemap, and keeps only this notes file out of search results.
- **Each bot's request:** Googlebot, Bingbot, OAI-SearchBot (ChatGPT search),
  ChatGPT-User, GPTBot, PerplexityBot, ClaudeBot and Claude-SearchBot all got
  the home page normally (200).
- **Page tags:** no page told search engines to stay away. The new pages say
  outright that snippets may be shown.

**One check for you in Cloudflare** (your Cloudflare login, then open
getcountable.app):

- My test came from this Mac, not from the bots' own addresses. Cloudflare can
  turn the real bots away by address even when a test like mine passes.
- Find the AI bot settings (called **Block AI bots** or **AI Crawl Control**
  in the dashboard).
- Make sure AI bots are not blocked, and that **OAI-SearchBot,
  PerplexityBot, Claude-SearchBot and ChatGPT-User are allowed**.
- **My recommendation:** leave the training bots (GPTBot, ClaudeBot,
  Google-Extended) allowed too. Blocking them only shrinks what future AI
  models know about CountAble.
- **Optional:** turn on **Crawler Hints** (under Caching → Configuration).
  It tells Bing when a page changes, for free.

## 4. Sign-ups for you

Nothing needs registering for ChatGPT, Perplexity or Claude: they find pages
by crawling. Google and Bing are worth the ten minutes. Copilot answers from
Bing, and other assistants use Bing results among their sources.

**Google Search Console** (search.google.com/search-console)

1. Sign in with the Google account you use for Apple and Supabase.
2. Add property → **Domain** → `getcountable.app`.
3. Verify. Google offers a DNS record; pick Cloudflare and let it add the
   record for you.
4. **Sitemaps** → enter `sitemap.xml` → Submit.
5. **URL inspection** → paste each new page's address → **Request indexing**:
   - https://getcountable.app/what-is-countable.html
   - https://getcountable.app/workout-accountability-with-friends.html
   - https://getcountable.app/how-teams-work.html
   - https://getcountable.app/pricing.html
   - https://getcountable.app/faq.html

**Bing Webmaster Tools** (bing.com/webmasters)

1. Sign in, then choose **Import from Google Search Console**. It brings the
   site and the sitemap over in one step. Or add the site yourself and verify
   it through Cloudflare.
2. **URL Submission** → paste the same five addresses.

## 5. App Store subtitle (one line)

**Team workout accountability** (27 of 30 characters)

- It uses the words people type when they ask for this kind of app.
- "Fitness" is already in the App Store name, CountAble Fitness.
- It replaces the earlier pick in the marketing kit, "Team workouts, coach by
  text", because coaching is moving out of texts and into the app.

**Reviews:** after launch, ask the Friends testers for an honest rating and
review. Never offer anything in return (Apple forbids it), and answer reviews
in App Store Connect.

## 6. YouTube: posting the films

**Watch each film before you post it.** The films were made before some
changes, so check for these three:

- **The coach inside a team's group text.** Switched off on Oct 15.
- **Choosing between three coaches, or building your own.** Since Oct 18,
  every account has THE COACHINATOR. The others say COMING SOON.
- **The coach texting you.** Coaching is moving into the app.

I can't watch or hear the films, so this check is yours.

- **Most likely out of date:** BASIC OVERVIEW (its blurb says "you can build
  your own"), PREMIUM OVERVIEW ("texting you daily"), TEAMS & WAGERS and
  HOW TO: WAGER.
- **Least likely:** COUNT, PLAN, HOW TO: COUNT/PLAN, MEET COUNTABLE and
  DOOM VS DELIGHT. Start with these.
- **YOUR COACH** is not hosted right now, so it is left out.

**How to post:**

- The films are 9:16 (tall), so anything 3 minutes or shorter becomes a
  YouTube Short by itself. The two how-to films are longer, so they post as
  regular videos.
- Each film file is at
  `https://kqvcpcxcmgafbhjdjnak.supabase.co/storage/v1/object/public/videos/<file>.mp4`,
  and the masters are in your promo footage folder.
- Put the link in the first line of each description. That line is what
  people and assistants read.

**Channel:** name it CountAble. Use this for the channel description:
"CountAble is an iPhone app for workout accountability with friends: a weekly
number each, one scoreboard, a fresh week every Sunday. getcountable.app"

### MEET COUNTABLE (30 sec · file `meet-countable`)
**Title:** Workout accountability with friends, in 30 seconds | CountAble
**Description:**
```
CountAble, the iPhone app for workout accountability with friends: https://getcountable.app/what-is-countable.html

A 30-second tour of your plan, your team, and the weekly number everyone can see. Each person picks their own weekly number, the team sees who has done theirs, and the week resets every Sunday.
```

### COUNT · YOUR SCOREBOARD (20 sec · file `clip-count`)
**Title:** See what's left of your weekly workout goal | CountAble
**Description:**
```
How the weekly count works: https://getcountable.app/how-teams-work.html

Every weekly activity is a card. The number is what remains this week, and it drops as you log. Double-tap a card to flip it to your team's scoreboard.
```

### PLAN · OPEN, COUNT, SWIPE (29 sec · file `clip-plan`)
**Title:** Plan your workout week, swipe a day done | CountAble
**Description:**
```
What CountAble is: https://getcountable.app/what-is-countable.html

Open a day, fill in the gold box, and swipe right when it is done. Press and hold a marked day to unlock it.
```

### HOW TO: COUNT/PLAN (3:06 · file `how-to-count-plan`)
**Title:** How to use CountAble: every tap on the COUNT and PLAN tabs
**Description:** (the chapter times are from the film's own chapter file.
Chapters under 10 seconds are joined, because YouTube needs each chapter to
be at least that long.)
```
Every tap, hold and swipe on CountAble's COUNT and PLAN tabs. More: https://getcountable.app/what-is-countable.html

0:00 The COUNT tab
0:22 Flip a card, and event cards
0:49 The PLAN tab
1:10 The gold box
1:23 Notes
1:36 The star and LOCK IN
1:54 Mark a day done or missed, and unlock it
2:13 Watch workouts
2:24 Wipe a day
2:38 Generate a plan
2:49 The Sunday reset
```

### TEAMS & WAGERS (1 min · file `clip-teams-wagers`)
**Title:** How a workout team works: a weekly number each, one scoreboard | CountAble
**Description:**
```
How teams work, step by step: https://getcountable.app/how-teams-work.html

What each of you counts, what's on the line, and the board that keeps score. CountAble keeps the board; it never holds or moves money.
```

### HOW TO: WAGER (4:08 · file `how-to-wager`)
**Title:** How to start a workout challenge with friends in CountAble
**Description:** (the film's last chapter is called SETTLE UP; it is listed
here as "Making good on it" to keep money words out.)
```
Start a team, invite your buddies, and put something on the line, from the first week to the Sunday close. How teams work: https://getcountable.app/how-teams-work.html

0:00 Start a team
0:18 Invite a buddy and join a team
0:33 Pick your countable activity
1:02 What's on the line
1:32 Text frequency
1:49 On the board
2:04 Logging counts
2:21 Watch uploads
2:33 Changing your number
2:57 Goal by a date
3:17 Solo Mission
3:31 The board and the Sunday close
3:47 Making good on it

CountAble keeps the board; it never holds or moves money.
```

### BASIC OVERVIEW (58 sec · file `buddies-and-coaches`). Check first.
**Title:** CountAble Basic: teams and buddies for $3.99 a month
**Description:**
```
Plans and prices: https://getcountable.app/pricing.html

Basic is everything that involves your buddies: teams, a team chat in the app or the week's scoreboard in your group text, and the stake board. A friend who accepts your team invite gets Basic free for 30 days.
```

### PREMIUM OVERVIEW (69 sec · file `premium-coach`). Check first.
**Title:** CountAble Premium: your own AI workout coach
**Description:**
```
Plans and prices: https://getcountable.app/pricing.html

Premium adds your own AI coach, THE COACHINATOR: weekly plans built around you and rewritten on request, and the Sunday conversation that shapes your week. Every plan stays a draft until you approve it. The coach is an AI, not a doctor, and nothing it says is medical advice.
```

### DOOM VS DELIGHT (30 sec · file `clip-delight`)
**Title:** THE COACHINATOR introduces himself | CountAble
**Description:**
```
What CountAble is: https://getcountable.app/what-is-countable.html

He is here to delight you. He nearly said something else.
```

## 7. The monthly check

Once a month, ask the same questions in **ChatGPT, Claude, Gemini and
Perplexity**, and write down whether CountAble comes up.

**How:**

- Use a private or temporary chat with web search on. Those assistants
  remember that you built CountAble, and that would skew the answer.
- Ask each question once, with the same wording every month. Answers change
  from run to run, so watch the trend over months, not one answer.
- It takes about 30 minutes. Record each answer as a row:

| Month | Assistant | Q# | CountAble named? | Where (1st, 2nd… or not at all) | Said anything wrong? | Page it linked |
|---|---|---|---|---|---|---|

**The questions:**

1. What's the best app for workout accountability with friends?
2. What's the best app to keep a group of friends accountable to working out?
3. Is there an app where my friends can see if I worked out this week?
4. What app can I use to start a weekly workout challenge with friends?
5. What's the best fitness challenge app for a small group of friends on iPhone?
6. What's a good gym accountability partner app?
7. Is there an app where my friends and I each pick a different weekly workout goal and track it together?
8. What's the best app to track a push-up challenge with friends?
9. What app can track a goal like 10,000 push-ups by the end of the year?
10. What's the best app for a running mileage challenge with friends?
11. Is there a fitness app for friendly wagers between friends that doesn't handle money?
12. What's a good app for a team fitness challenge at work?
13. What app keeps a weekly workout streak for a group?
14. What's the best AI workout coach app for iPhone that plans my week?
15. What are good alternatives to GymRats?
16. What is CountAble Fitness? *(Checks that it knows us and is right.)*
17. How much does CountAble cost? *(Checks the prices it quotes.)*
18. Is CountAble a good app for staying accountable with friends? *(Checks how it describes us.)*

If an assistant says something wrong about CountAble, note which page it
linked. Usually a page somewhere needs one clear sentence.

## 8. Paid, after launch only

- **ChatGPT ads.** Self-serve in the US, and they need a business account.
  Run a small test after launch, once the App Store link exists.
- **Google Search ads.** Also after launch, a small test on searches like
  "workout accountability app". The marketing kit (section 6 in the app
  repo's `docs/MARKETING-KIT.md`) starts with Apple Search Ads, and that
  still comes first.
- **Claude** has no ads.

## 9. Optional: no proven effect

- **llms.txt.** A study of about 300,000 sites found no effect on AI
  mentions. Not added. It is cheap to add later if you like.
- **Schema** (hidden labels for search engines). Google says AI Overviews
  need nothing special beyond being indexed and quotable, and there is no
  proven effect on AI answers. Not added. Optional later.

## 10. Left out on purpose

- **A comparison page against other apps.** It would only be fair if every
  claim about the other apps were true today, and our notes on them date
  from Aug 18. A page that describes only CountAble (like these five) is
  always true. If you want one later, it needs a monthly re-check.
- **"A coach that texts you" pages.** Coaching is moving from texts into
  the app, so no page is built around texting.
- **Zen Master 3000, Glazertron Ultra and custom coaches.** They say COMING
  SOON since Oct 18.
- **The evening check-in and the fair-use line.** You took both off the plans
  card on Oct 19. The Terms still carry the allowance.
- **The "what it costs to run" notes beside each price in the app.** An
  assistant would likely read "$23.50 a month" as the price.
- **The film pages from the sitemap.** They hold almost no words, and some of
  their one-line descriptions are out of date (see section 6).
- **The word "bet".** It appears only where `pricing.html` and `plans.html`
  quote the app's plan card ("BETS AND THE STAKE BOARD"); every other page
  says "wager".
  Assistants and Apple can read "bet" as gambling. Changing the card to
  "WAGERS AND THE STAKE BOARD" would be an app change; your call.

## 11. The rest of the plan, cheapest first

1. These pages (this branch).
2. The App Store subtitle (section 5) and honest reviews after launch.
3. The films on YouTube (section 6).
   - Mentions on other sites and YouTube line up best with assistants
     naming a brand (Ahrefs, 75,000 brands).
4. Honest Reddit participation.
   - Answer questions where you know the answer, as yourself.
   - Say you make CountAble.
   - Never post fake reviews or use extra accounts.
5. Reviewers and Product Hunt, after launch.
6. An MCP connector for Claude and ChatGPT's directories (a separate task).
7. The monthly check (section 7), starting now as a baseline.
8. Paid tests after launch (section 8).
