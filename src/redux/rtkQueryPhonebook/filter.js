export const filterContacts = (contacts, filter) => {
  if (!contacts) return [];
  const result = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.trim().toLowerCase()),
  );
  return result.length > 0 ? result : contacts;
};
