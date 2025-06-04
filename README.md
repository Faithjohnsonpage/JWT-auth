## ✅ **Tech Stack Overview**

**Frontend (planned later):**

* **React** (you already use this)

**Backend:**

* **Node.js + Express**
* **MongoDB** (with **Mongoose**)
* **Authentication:** JSON Web Token (**JWT**)

---

## 📚 Core Libraries & Tools

### 📦 Backend Libraries

| Purpose                     | Library             |
| --------------------------- | ------------------- |
| Server framework            | `express`           |
| MongoDB ODM                 | `mongoose`          |
| Password hashing            | `bcryptjs`          |
| Authentication              | `jsonwebtoken`      |
| Parsing JSON body           | `express.json()`    |
| Environment variables       | `dotenv`            |
| Cross-Origin support        | `cors`              |
| Input validation (optional) | `express-validator` |
| Dev server auto-reload      | `nodemon`           |

---

## 🗂️ Suggested Folder Structure

```
social-feed-api/
├── controllers/
│   └── authController.js
│   └── postController.js
│   └── userController.js
│   └── commentController.js
├── models/
│   └── User.js
│   └── Post.js
│   └── Comment.js
├── routes/
│   └── authRoutes.js
│   └── userRoutes.js
│   └── postRoutes.js
│   └── commentRoutes.js
├── middleware/
│   └── authMiddleware.js
├── config/
│   └── db.js
├── .env
├── server.js
├── package.json
```

---

## 📌 Features Breakdown & Milestones

### ✅ 1. **User Authentication** (JWT)

* `POST /auth/register`
* `POST /auth/login`
* Hash passwords with `bcryptjs`
* Generate JWT on login

### ✅ 2. **User Profiles**

* `GET /users/:id`
* `PUT /users/:id` (only self)
* Basic profile info (bio, displayName, avatarURL)

### ✅ 3. **Post Updates**

* `POST /posts`
* `DELETE /posts/:id`
* `GET /posts/feed` – All followed users’ posts
* `GET /posts/:id` – Single post detail

### ✅ 4. **Follow/Unfollow Users**

* `POST /users/:id/follow`
* `DELETE /users/:id/unfollow`
* `GET /users/:id/followers`
* `GET /users/:id/following`

### ✅ 5. **Likes & Comments**

* `POST /posts/:id/like`
* `DELETE /posts/:id/unlike`
* `POST /posts/:id/comments`
* `GET /posts/:id/comments`

---

## 🧱 Database Models (via Mongoose)

### User

```js
{
  username: String,
  email: String,
  password: String (hashed),
  bio: String,
  avatarURL: String,
  followers: [ObjectId],
  following: [ObjectId]
}
```

### Post

```js
{
  user: ObjectId,
  content: String,
  createdAt: Date,
  likes: [ObjectId], // user IDs
  comments: [ObjectId] // comment IDs
}
```

### Comment

```js
{
  user: ObjectId,
  post: ObjectId,
  content: String,
  createdAt: Date
}
```

---

## 🕐 Realistic Timeline Estimate

If you're working **solo with moderate focus (1–2 hrs/day)**:

| Phase             | Duration | Tasks                  |
| ----------------- | -------- | ---------------------- |
| Setup & Auth      | 2–3 days | Server setup, JWT auth |
| User CRUD         | 1–2 days | Profile endpoints      |
| Posts CRUD        | 2–3 days | Posting & feed         |
| Follow System     | 1–2 days | Following/followers    |
| Likes/Comments    | 2–3 days | Social interactions    |
| Testing + Cleanup | 2 days   | Postman/Jest, refactor |

⏳ **Total: \~10–14 days** at a steady pace.

---

## 🧩 Integration with Flask Auth (Later)

Since the Flask app uses **session-based auth**, and this uses **JWT**, here's what you could do when you're ready to merge:

1. **Unified Identity Backend (Optional):**

   * Create a shared **auth microservice** for both apps.
   * Use JWT everywhere (you can issue tokens from Flask too).

2. **Keep separate for now:**

   * Use JWT for this Node service only.
   * Build a bridge later when unifying.

Let me know if you want help generating boilerplate or configuring the JWT-based auth and routing!

