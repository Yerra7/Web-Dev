class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity

    def total_price(self):
        return self.price * self.quantity

    def describe(self):
        return f"{self.name}: {self.price}$ x {self.quantity}"

    def __str__(self):
        return f"{self.name} ({self.price}$)"


class Book(Product):
    def __init__(self, name, price, quantity, author):
        super().__init__(name, price, quantity)
        self.author = author

    def describe(self):
        return f"Book: {self.name} by {self.author}, {self.price}$ x {self.quantity}"


class Electronics(Product):
    def __init__(self, name, price, quantity, brand):
        super().__init__(name, price, quantity)
        self.brand = brand

    def describe(self):
        return f"Electronics: {self.brand} {self.name}, {self.price}$ x {self.quantity}"