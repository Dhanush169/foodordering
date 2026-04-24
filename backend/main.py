from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from fastapi.middleware.cors import CORSMiddleware

import models, schemas, database
from database import engine, get_db

# Create tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="FoodDash API")

# Seed initial data if empty
@app.on_event("startup")
def seed_data():
    db = next(get_db())
    if db.query(models.Restaurant).count() == 0:
        mock_restaurants = [
            {"name": "The Burger Mansion", "category": "Burgers", "image_url": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=80", "rating": "4.8", "delivery_time": "20-30 min", "price_range": "$$"},
            {"name": "Pasta Paradiso", "category": "Italian", "image_url": "https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=800&q=80", "rating": "4.6", "delivery_time": "30-45 min", "price_range": "$$$"},
            {"name": "Sushi Zen", "category": "Japanese", "image_url": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80", "rating": "4.9", "delivery_time": "25-40 min", "price_range": "$$$$"},
            {"name": "Spice Route", "category": "Indian", "image_url": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", "rating": "4.7", "delivery_time": "35-50 min", "price_range": "$$"},
            {"name": "Taco Fiesta", "category": "Mexican", "image_url": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80", "rating": "4.5", "delivery_time": "15-25 min", "price_range": "$"},
            {"name": "Green Garden", "category": "Salads", "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80", "rating": "4.4", "delivery_time": "20-35 min", "price_range": "$$"}
        ]
        
        for r in mock_restaurants:
            db_restaurant = models.Restaurant(**r)
            db.add(db_restaurant)
            db.commit()
            db.refresh(db_restaurant)
            
            # Seed menu items for each restaurant
            mock_menu_items = [
                {"restaurant_id": db_restaurant.id, "name": f"{db_restaurant.category} Special", "description": f"The famous signature dish from {db_restaurant.name}.", "price": 14.99, "image_url": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80"},
                {"restaurant_id": db_restaurant.id, "name": "Classic Side", "description": "A perfect accompaniment to your main course.", "price": 5.99, "image_url": "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?w=500&q=80"},
                {"restaurant_id": db_restaurant.id, "name": "Refreshing Drink", "description": "Cool down with this house-made beverage.", "price": 3.99, "image_url": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&q=80"}
            ]
            for m in mock_menu_items:
                db_menu_item = models.MenuItem(**m)
                db.add(db_menu_item)
            db.commit()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to the FoodDash API"}

@app.get("/api/restaurants", response_model=List[schemas.Restaurant])
def get_restaurants(db: Session = Depends(get_db)):
    return db.query(models.Restaurant).all()

@app.get("/api/restaurants/{restaurant_id}/menu", response_model=List[schemas.MenuItem])
def get_restaurant_menu(restaurant_id: int, db: Session = Depends(get_db)):
    return db.query(models.MenuItem).filter(models.MenuItem.restaurant_id == restaurant_id).all()

@app.get("/users/", response_model=List[schemas.User])
def get_users(db: Session = Depends(get_db)):
    return db.query(models.User).all()

@app.post("/users/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = models.User(
        full_name=user.full_name,
        username=user.username, 
        email=user.email, 
        hashed_password=user.password, # In real app, hash this!
        role=getattr(user, 'role', 'customer') # Default to customer if not provided
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

@app.get("/tasks/", response_model=List[schemas.Task])
def get_tasks(db: Session = Depends(get_db)):
    return db.query(models.Task).all()

@app.post("/tasks/", response_model=schemas.Task)
def create_task(task: schemas.TaskCreate, db: Session = Depends(get_db)):
    db_task = models.Task(**task.dict())
    db.add(db_task)
    db.commit()
    db.refresh(db_task)
    return db_task
