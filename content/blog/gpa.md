---
title: "GPA Calculator -- an adventure in spreadsheet wheel-reinvention"
date: 2024-09-16
author: Ian Maher
tags: [EdTech, guidance counseling, conditional, GPA]
---

### The problem
Every September, I am asked by students which classes they ought to take. Some of them want different electives, and some just want to be with friends or a favorite teacher. But many, especially the upperclassmen, want to know which classes might boost their GPA the most. My own sense of what a GPA means is colored by my own experiences in school, especially college and later, graduate school. 

But collegiate and secondary school GPAs are computed differently, since courses are weighted in high school. More difficult classes, especially AP clases, are naturally given more weight than a class where a beating pulse is returned with an easy A.

Here is what my high school uses:

![GPA Scale](https://f005.backblazeb2.com/file/ianpmaher/gpascale.png)

Seems simple enough, right? Well it is, but it's also tedious. The Student Information Software (SIS) that the school uses will compute it all on its own, but it does so behind the scene, and it's not great for the most natural question for a student to ask: 
- "What if I got *x* grade in *y* class?"
- Or more precisely, "How can I make sure to maintain my class rank this year?

**It takes roughly 10 minutes to do the arithmetic by hand, and I tired of the tedium.**

![absolute inefficiency](https://f005.backblazeb2.com/file/ianpmaher/IMG_6123.webp)

**The goal: make GPA calculations so efficient and easy that students can do it themselves.**

---

### Coming up with the formula
To help students understand which courses might boost their GPA the most, I needed a way to compute GPA automatically based on a table of course levels, grades, and credits. I started by defining a table in Google Sheets with each possible combination of letter grade and class level—ranging from AP (Advanced Placement) to regular courses. This table would assign numerical values, or "grade points," to each combination.

Once the table was defined, I used a formula to calculate each student's GPA based on their course load. The basic formula took into account the weight of each class and multiplied the grade points by the credits for that course:

> =ARRAYFORMULA(
> &nbsp;IF(ISBLANK(B2:B),,
> &nbsp;&nbsp;VLOOKUP(B2:B, 
> &nbsp;&nbsp;&nbsp;Table!$A$2:$M$6, 
> &nbsp;&nbsp;&nbsp;MATCH(C2:C, Table!$B$1:$M$1, 0) + 1, 
> &nbsp;&nbsp;&nbsp;FALSE)))

This formula uses `VLOOKUP` to match the student's letter grade to the weighted GPA for that course level (AP, Honors, etc.), then multiplies the result by the number of credits for the course. It allowed students to simply input their class level, grade, and credits for each course, and the formula would take care of the rest.

Students need to input these data for each entry: name of the course, final grade, credits earned. Then the formula takes care of the rest:
![Google Sheets](https://f005.backblazeb2.com/file/ianpmaher/sheets1.webp)

---

### Creating a web app for accessibility
While the Google Sheets solution worked well for students who were familiar with spreadsheets, I realized it wasn't the most *accessible* solution for everyone. Many students weren't comfortable with spreadsheet software and found the process of making a copy of the sheet and editing it to be a hassle. Plus, there was always the risk that someone would accidentally delete the formula, leaving them frustrated and confused.

To solve this problem, I decided to build a dedicated web page for students to calculate their GPA. This approach would allow me to lock down the calculations, preventing students from accidentally messing with any of the underlying logic while providing a more user-friendly interface.

The web page would essentially mimic the functionality of the Google Sheet but would offer a cleaner, more interactive experience for students who may not be tech-savvy. I used a combination of front-end technologies like React to create dynamic forms where students could select their course level, enter their grades, and see their GPA instantly. 

This also meant I could handle the GPA calculation on the backend, ensuring the formula would always be correct and removing any guesswork or potential errors from students manually copying the formula. Plus, building a dedicated tool allowed me to make the interface more intuitive, ensuring a better experience overall for students trying to plan their coursework.

---

### The Stack
- React.js 
- Vite
- react-pdf
- react-csv-importer
- react-paraparse
- Handsontable _@handsontable/react_
- Radix-UI for flavorful components 
- TailwindCSS for styling

As you can see, multiple node packages and libraries for a bunch of different things. Initally, I planned and executed an entirely custom solution. Tables in traditional html are really not as obnoxious as they seem, and dynamically coding the formula was easy. Here are the utility functions I've used:
![utils.js](https://f005.backblazeb2.com/file/ianpmaher/gpafiletree+BEST.png)

The functionality I wanted to deliver consisted of:
- simply fill out a form, with ease-of-use
- generate a file for them to take with them:
  - csv for import to Google Sheets (since they all have Chromebooks)
  - pdf for easy reference
  - importing a whole bunch of grades (still bugs to be worked out there, and this one was mainly for folks in the data roles)

### First drafts...
Here is a visual of my homebrew, sans the fancy table I would later implement thanks to Handsontable:
![light mode](https://f005.backblazeb2.com/file/ianpmaher/gpacalclight.webp)

![dark mode](https://f005.backblazeb2.com/file/ianpmaher/gpacalcnight.webp)

Critiquing myself a bit, I found this to be a **MASSIVE** educational experience. Working with data is tricky, and I came away from this experience being a **_firm believer in TypeScript._** Seriously. I had to do so much debugging, and running ``tsc`` in the terminal would have saved a lot of time.

I love styling and frontend. But at the same time, I came away from this process realizing that I burn my time on customizing and tailoring minute details. Sure, the colors are fun, but I did them without much regard for the user, who would rather just get on with their lives. It's a rabbithole. 

Similar to my experiences in creating this very blog functionality (as part of my portfolio website), I really need to stop reinventing the wheel. A spreadsheet, made in JavaScript, dynamically rendered through the power of React and client-side processes, was a tremendous learning experience. But sometimes you gotta just go with the tried and true.

### Enter: _Handsontable_
I stumbled upon [Handsontable](https://handsontable.com/demo) and knew it was the right choice for the project. Something that _works_, is _unstyled_, and is ready for _functionality addons out of the box_.

Here it is in action:
<iframe width="560" height="315" src="https://www.youtube.com/embed/6EQafAVkVoE?si=GsyuiLEQVEX68Sb3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

After exploring several options, I settled on Handsontable, a powerful JavaScript library that allows you to embed Excel-like spreadsheets directly into web pages. What I loved about Handsontable is that it offered the familiarity of a spreadsheet interface while giving me full control over the calculations and the layout, ensuring that students couldn’t accidentally break any formulas.

### Handsontable: The perfect spreadsheet component

Handsontable is not just any table component. It’s designed specifically to handle spreadsheet-like functionality, and its vast customization options make it a great fit for my needs. One of the key aspects that drew me to Handsontable is how intricate and customizable the options are. Whether I needed dropdowns, number fields, or computed cells, Handsontable had built-in solutions that “just worked.”

With Handsontable, I was able to:
- Customize cells: I needed different input types like dropdowns for class levels, letter grades, and credit hours, along with computed fields for grade points and quality points. Handsontable’s ability to treat each column as a different type (e.g., text, dropdown, numeric) made it easy to reflect the same structured data as in the Google Sheets version.
- Control the logic: By integrating GPA calculations directly into the app’s logic, I could ensure students would never have to worry about breaking the formula. Each time they entered a grade or selected a course, the GPA would automatically update, mimicking the functionality of a spreadsheet while maintaining the integrity of the formula behind the scenes.
- Add and remove rows dynamically: A key requirement for this tool was to allow students to enter as many or as few courses as they needed. Handsontable makes this easy by supporting dynamic row addition and removal. I could define spare rows that automatically appeared when the student began entering data in the last available row, ensuring a fluid experience.
- Styling and responsiveness: Another big win for Handsontable is how flexible it is when it comes to styling. It fits perfectly within the design of the website, scaling appropriately on different screen sizes and devices. With a bit of tweaking, I was able to ensure the table looked clean and professional on desktop and mobile alike.

### A seamless experience for students

With Handsontable, students no longer have to worry about breaking any formulas or making a copy of a spreadsheet. Instead, they can simply visit the web page, input their course details, and instantly get an accurate GPA calculation. The flexibility and power of Handsontable allowed me to replicate everything I had in the Google Sheets version—dropdowns, formulas, and dynamic rows—without any of the hassle.

In fact, it just works. This is some of the functionality advertised on their website:
![handsontable github photo](https://raw.githubusercontent.com/handsontable/handsontable/develop/resources/handsontable-github-preview.png)

Students can now focus on what really matters: making informed decisions about their course loads and understanding how different class combinations impact their GPA. The process is smooth, intuitive, and error-proof, thanks to Handsontable’s seamless integration and my ability to lock down the calculations.

### Wrapping up

Using Handsontable was a game-changer in building this GPA calculator. It gave me all the tools I needed to provide students with a familiar spreadsheet-like interface while removing the complexity of traditional spreadsheet software. Whether they are trying to boost their GPA or simply stay on track, this tool is now a core part of the resources I offer.
