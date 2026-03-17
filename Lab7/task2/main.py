from models import Product, Book, Electronics


def main():
    p1 = Product("Generic Item", 10, 2)
    b1 = Book("Python 101", 25, 1, "John Smith")
    e1 = Electronics("Phone", 300, 1, "Samsung")

    items = [p1, b1, e1]

    for item in items:
        print(item)                 # __str__
        print(item.describe())      # polymorphism
        print("Total:", item.total_price())
        print("-" * 30)


if __name__ == "__main__":
    main()