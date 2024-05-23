---
title: "Server Madness: localhost / 127.0.0.1"
date: 2024-05-23
author: Ian Maher
tags: [raspberry-pi, ri, fetch, npm]
---

# Building a Full-Stack Application: Express Backend and Frontend Integration

Hello, everyone! Ian here again. Today, I want to dive into one of my favorite aspects of web development: creating a full-stack application. We'll explore how to set up an Express backend server for the RI-API, which provides picture URLs and fun facts in JSON format, and connect it to a frontend application. This approach allows seamless interaction between different components, even if they run on separate machines or ports.

## Setting Up the RI-API Backend with Express

Let's start with the backend. Express.js is a powerful framework for building web servers in Node.js. Here’s a step-by-step guide to getting your RI-API backend server up and running:

### Step 1: Initialize Your Project

First, create a new directory for your project and navigate into it. Then, initialize a new Node.js project:

```bash
mkdir ri-api
cd ri-api
npm init -y
```
##Then install Express and any other necessary packages
```
npm install express
```