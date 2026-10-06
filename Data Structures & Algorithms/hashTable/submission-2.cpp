class Node {
public:
    int key;
    int value;
    Node* next;
    Node(int key, int value) : key(key), value(value), next(nullptr){}
};

class HashTable {
    int capacity;
    int size;
    vector<Node*> table;

    int createHash(int key){
        return key % capacity;
    }

public:
    HashTable(int capacity) : capacity(capacity), size(0) {
        table.resize(capacity, nullptr);
    }

    void insert(int key, int value) {
        int hash = createHash(key);
        Node* current = table[hash];
        if(current == nullptr) {
            table[hash] = new Node(key, value);
        
        } else {
            Node* prev = nullptr;
            while(current) {
                if(current->key == key) {
                    current->value = value;
                    return;
                } else {
                    prev = current;
                    current = current->next;
                }
            }
            prev->next = new Node(key, value);

        }
        size++;
        if((float)size / capacity >= 0.5) {
            resize();
        }
    }

    int get(int key) {
        int hash = createHash(key);
        Node* current = table[hash];
        while(current != nullptr) {
            if(key == current->key)
                return current->value;
            else current = current->next;
        }
        return -1;
    }

    bool remove(int key) {
        int hash = createHash(key);
        Node* current = table[hash];
        Node* prev = nullptr;
        while(current != nullptr) {
            Node* next = current->next;

            if(key == current->key){
                if(prev == nullptr && next == nullptr) {
                    table[hash] = nullptr;
                } else if(prev == nullptr && next != nullptr) {
                    table[hash] = next;
                } else if(prev != nullptr && next == nullptr) {
                    prev->next = nullptr;
                } else if(prev != nullptr && next != nullptr) {
                    prev->next = next;
                }
                size--;
                return true;
            }
            prev = current;
            current = next;
        }
        return false;
    }

    int getSize() const {
        return size;
    }

    int getCapacity() const {
        return capacity;
    }

    void resize() {
        vector<Node*> newTable;
        capacity *= 2;
        newTable.resize(capacity, nullptr);
        
        for(Node* node : table) {
            while(node) {
                int hash = createHash(node->key);
                if(!newTable[hash]) {
                    newTable[hash] = new Node(node->key, node->value);
                } else {
                    Node* current = newTable[hash];
                    while(current->next) {
                        current = current->next;
                    }
                    current->next = new Node(node->key, node->value);
                }
            Node* toDelete = node;
            node = node->next;
            delete toDelete;
            }
        }

        table = newTable;
    }
};
