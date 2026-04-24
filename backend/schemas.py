from pydantic import BaseModel, EmailStr
from typing import Optional, List

class UserBase(BaseModel):
    full_name: str
    username: str
    email: EmailStr

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    role: str
    is_active: bool

    class Config:
        from_attributes = True

class RestaurantBase(BaseModel):
    name: str
    category: str
    image_url: str
    rating: str
    delivery_time: str
    price_range: str

class RestaurantCreate(RestaurantBase):
    pass

class Restaurant(RestaurantBase):
    id: int

    class Config:
        from_attributes = True

class TaskBase(BaseModel):
    title: str
    description: Optional[str] = None
    completed: bool = False

class TaskCreate(TaskBase):
    pass

class Task(TaskBase):
    id: int

    class Config:
        from_attributes = True

class MenuItemBase(BaseModel):
    restaurant_id: int
    name: str
    description: str
    price: float
    image_url: str

class MenuItemCreate(MenuItemBase):
    pass

class MenuItem(MenuItemBase):
    id: int

    class Config:
        from_attributes = True
