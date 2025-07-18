# Zenova Backend API Documentation

## Authentication
All endpoints (except `/auth`) require a Bearer token in the `Authorization` header.

---

## AlcoholLog
### POST /alcoholLog
**Request Body:**
```
{
  "user": "<userId>",
  "logs": [
    { "date": "2024-06-01", "count": 2, "context": "Socially" }
  ]
}
```
**Response:**
```
{
  "_id": "...",
  "user": "...",
  "logs": [...],
  "createdAt": "...",
  "updatedAt": "..."
}
```

### GET /alcoholLog
**Response:** Array of AlcoholLog objects

### GET /alcoholLog/:id
**Response:** AlcoholLog object

### PUT /alcoholLog/:id
**Request Body:** (same as POST)
**Response:** Updated AlcoholLog object

### DELETE /alcoholLog/:id
**Response:** `{ "message": "AlcoholLog deleted" }`

---

## BMRLog
### POST /bmrLog
**Request Body:**
```
{
  "user": "<userId>",
  "logs": [
    { "date": "2024-06-01", "bmr": 1500, "height": 170, "weight": 65 }
  ]
}
```
**Response:** BMRLog object

### GET /bmrLog
**Response:** Array of BMRLog objects

### GET /bmrLog/:id
**Response:** BMRLog object

### PUT /bmrLog/:id
**Request Body:** (same as POST)
**Response:** Updated BMRLog object

### DELETE /bmrLog/:id
**Response:** `{ "message": "BMRLog deleted" }`

---

## MeasurementLog
### POST /measurementLog
**Request Body:**
```
{
  "user": "<userId>",
  "logs": [
    { "date": "2024-06-01", "neck": 38, "chest": 100, "waist": 80, "hip": 90, "arm": 30, "notes": "Progressing" }
  ],
  "reminder": "Every Monday"
}
```
**Response:** MeasurementLog object

### GET /measurementLog
**Response:** Array of MeasurementLog objects

### GET /measurementLog/:id
**Response:** MeasurementLog object

### PUT /measurementLog/:id
**Request Body:** (same as POST)
**Response:** Updated MeasurementLog object

### DELETE /measurementLog/:id
**Response:** `{ "message": "MeasurementLog deleted" }`

---

## User
### POST /user
**Request Body:**
```
{
  "email": "user@example.com",
  "mobile": "1234567890",
  "password": "password123",
  "firstName": "John",
  "dob": "1990-01-01",
  "biologicalSex": "Male",
  "height": "180",
  "weight": "75",
  "heightUnit": "cm",
  "weightUnit": "kg",
  "dietType": "Vegetarian",
  "activityLevel": "Active",
  "medicalConditions": ["Diabetes"],
  "location": "City",
  "languages": ["English"],
  "mood": "Happy",
  "lifestyle": "Healthy",
  "goals": ["Lose weight"],
  "aiAgents": [{ "name": "Coach", "gender": "Male", "tonality": "Friendly", "type": "Lifestyle Coach" }],
  "onboardingCompleted": true
}
```
**Response:** User object

### GET /user
**Response:** Array of User objects

### GET /user/:id
**Response:** User object

### PUT /user/:id
**Request Body:** (any updatable fields)
**Response:** Updated User object

### DELETE /user/:id
**Response:** `{ "message": "User deleted" }`

---

## MedicineLog
### POST /medicineLog
**Request Body:**
```
{
  "medicines": [
    {
      "name": "Paracetamol",
      "startDate": "2024-06-01",
      "repeat": "Daily",
      "times": ["08:00", "20:00"],
      "history": [
        { "date": "2024-06-01", "status": "Taken" }
      ]
    }
  ],
  "reminder": "Take after meals"
}
```
**Response:** MedicineLog object

### GET /medicineLog
**Response:** Array of MedicineLog objects

### PUT /medicineLog/:id
**Request Body:** (any updatable fields)
**Response:** Updated MedicineLog object

### DELETE /medicineLog/:id
**Response:** `{ "message": "Log deleted" }`

---

# ...
# Repeat similar documentation for all other resources/routes in your API.
# ...

---

## Notes
- All endpoints require `Authorization: Bearer <token>` except `/auth`.
- Dates should be in ISO format (YYYY-MM-DD).
- All responses are JSON.

---

For more details, see the source code or contact the maintainer. 