import React, { useState } from 'react';

function SelfCareList({ selfCareItems }) {
  const [completedItems, setCompletedItems] = useState([]);
  const [newItemTitle, setNewItemTitle] = useState('');
  const [newItemCategory, setNewItemCategory] = useState('');
  const [items, setItems] = useState(selfCareItems);
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleItemCompletion = itemId => {
    if (completedItems.includes(itemId)) {
      setCompletedItems(completedItems.filter(id => id !== itemId));
    } else {
      setCompletedItems([...completedItems, itemId]);
    }
  };

  const toggleAllCompletion = () => {
    if (completedItems.length === items.length) {
      setCompletedItems([]);
    } else {
      const allItemIds = items.map(item => item.id);
      setCompletedItems(allItemIds);
    }
  };

  const handleNewItemTitleChange = event => {
    setNewItemTitle(event.target.value);
  };

  const handleNewItemCategoryChange = event => {
    setNewItemCategory(event.target.value);
  };

  const handleAddItem = () => {
    const newItem = {
      id: Date.now(),
      title: newItemTitle,
      category: newItemCategory
    };

    setItems([...items, newItem]);
    setNewItemTitle('');
    setNewItemCategory('');
  };

  const handleToggleSelected = itemId => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter(id => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const handleDeleteSelected = () => {
    const updatedItems = items.filter(item => !selectedItems.includes(item.id));
    setItems(updatedItems);
    setCompletedItems([]);
    setSelectedItems([]);
  };

  return (
    <div>
      <h3>Self-Care Activities</h3>
      <button onClick={toggleAllCompletion}>
        {completedItems.length === items.length ? 'Mark All Incomplete' : 'Mark All Completed'}
      </button>
      <ul>
        {items.map(item => (
          <li
            key={item.id}
            onClick={() => toggleItemCompletion(item.id)}
            style={{
              textDecoration: completedItems.includes(item.id) ? 'line-through' : 'none'
            }}
          >
            <span
              onClick={() => handleToggleSelected(item.id)}
              style={{ cursor: 'pointer' }}
            >
              {item.title} - {item.category}
            </span>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handleDeleteSelected} disabled={selectedItems.length === 0}>
          Delete Selected
        </button>
      </div>
      <div>
        <input
          type="text"
          value={newItemTitle}
          onChange={handleNewItemTitleChange}
          placeholder="Enter task title"
        />
        <input
          type="text"
          value={newItemCategory}
          onChange={handleNewItemCategoryChange}
          placeholder="Enter task category"
        />
        <button onClick={handleAddItem}>Add Task</button>
      </div>
    </div>
  );
}

export default SelfCareList;