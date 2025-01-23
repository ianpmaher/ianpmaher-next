---
title: "IT & Networking: Plumbing the Bits"
date: 2024-11-23
author: Ian Maher
tags: [CCNA, CompTIA, networking, CCST]
---

### Computers: Back to Beginnings
Millennials grew up at a time when personal computers were becoming accessible, but not yet ubiquitous. I’ve long been grateful for the chance to learn primarily from books, play video games on devices dedicated to the purpose, and not to blur the two. Instead of Chromebooks in every class, my high school had a computer lab used every once in a blue moon. My college days were spent on a 15” MacBook Pro with a dual-core processor (it still works). 

### Information Technology 
All along the way, IT was in the background, making sure packets got delivered. Although I was a tech-savvy kid, sometimes I did need to bring my laptop to the Genius Bar, ask the campus Help Desk about installing software, and so on. 

### CCST
My first step on the way to a career in IT is the **Cisco Certified Support Technician - Networking**. I am going to focus on networking. There are a fair number of entry-level certifications (marketed towards career changers like myself) from other providers. There is **ITIL 4 Foundation**, as well as the **CompTIA A+**. I will sign myself up for the the A+ certification shortly after the CCST, for the sake of some resume strengthening. 

So far, while completing a Udemy prep course, I have really learned a lot. 
* I can now count from 0 to f
* I can go from decimal to hexadecimal to binary 
* I get IPv4 now, so my prior experience with setting up network servers has paid off

This specific niche is really compelling. The infrastructure underlying every business, school, and agency starts and ends with devices connecting to each other and the wider Internet. I want to climb up on a ladder to connect a PoE Access Point. I want to crimp my own RJ45 Ethernet cables for fun and profit. I want to be bombarded with the sounds of a thousand fans in a data center (perhaps). 

![spaghetti ethernet cables](https://i.imgur.com/K2edHOa.jpeg)

### Baby Homelab
My house has a combination of old and new technology...implemented poorly. The previous owners did have Fios Fiber, which I happily set up for me and my wife. The problem: the Ethernet cable coming out of the ONT (Optical Network Terminal) runs along our basement, and it literally comes up out of the floor. The installer decided to drill a hole in our beautiful floorboards to run the cables into our dining room 😣 Naturally, zero wife-approval factor, and not sustainable in the least. 

I bought some CMR-rated riser cable from /r/homelabsales, a Klein crimper, and I got to work creating my very first RJ45 termination. It took a couple of tries, but the cable worked! I checked it with iperf3 and speedtest websites, and I was pulling the same as an off-the-shelf patch cable. 

My idea was to take some of the RJ11 phone jack keystones, adhere some Cat6 riser cable to the end, and literally pull down my cable. Unfortunately, even this was a disappointment. This phone line was ***also*** drilled into the hardwood, which never did anything to deserve this fate. Why the hell did someone decide not to run the cables through the wall? The high voltage items in the house (AC outlets, lightswitches) all look proper. 

What started as a foray into the world of aesthetic niceties has become a pet project: my very own server rack.

![not to scale](https://i.imgur.com/6pOswb6.png)

### UniFi ###
Ubiquiti makes some really impressive products, all of which are overkill for my purposes. I'm assuming the sleekness comes from the founder's experience at Apple. The same **premium** lushness. The same high quality cardboard boxes I find it hard to toss. Buying new from their online store is too easy, and it is also too expensive. Through eBay and the aforementioned /r/homelabsales, I've come to own some extremely nice networking equipment.

- Cloud Gateway Max (I will add SSD later)
- 24-port USW-24 switch (Gen 2) ➡️ far too many
- Switch Lite 8 PoE 
- G4 Bullet (UVC-G4-Bullet)

I would like to throw in an AP at some point. I plan on trying to find a way to make my free Verizon router into the AP for our network.