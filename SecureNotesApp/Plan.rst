✅ SECURE NOTES APP — COMPLETE CHECKLIST VERSION
🟦 PHASE 1 — INITIAL SETUP
✅ 1. Create project

npx @react-native-community/cli init SecureNotesApp

✅ 2. Install libraries

react-native-encrypted-storage

@react-native-async-storage/async-storage

react-native-uuid

✅ Navigation libs:

@react-navigation/native

@react-navigation/native-stack

react-native-screens

react-native-safe-area-context

✅ 3. Create folder structure
/src
  /screens
  /components
  /storage
  /encryption

🟩 PHASE 2 — BASIC UI & NAVIGATION
⬜ 4. Set up stack navigation

HomeScreen

AddNoteScreen

ViewNoteScreen

⬜ 5. Build HomeScreen UI

FlatList for notes

“Add Note” button

⬜ 6. Build AddNoteScreen UI

TextInput

“Save” button

⬜ 7. Build ViewNoteScreen UI

Area to show decrypted text

Back button

⬜ 8. Create NoteListItem component

Shows encrypted text + date

Touchable

🟧 PHASE 3 — LOCAL STORAGE (PLAIN FIRST)
⬜ 9. Create /storage/notesStorage.js

Add functions: getNotes, saveNotes, addNote.

⬜ 10. Connect HomeScreen to storage

Load notes on mount

⬜ 11. Connect AddNoteScreen

Save new note (temporary plaintext)

⬜ 12. Connect ViewNoteScreen

Show plaintext (temporary)

🔥 Test everything works BEFORE adding encryption

🟥 PHASE 4 — KEY MANAGEMENT
⬜ 13. Create /encryption/keyManager.js

Add logic to:

Check existing key

Generate key if missing

Store key securely

Retrieve key

⬜ 14. Initialize key when app starts

Preferably inside HomeScreen or App root

🟪 PHASE 5 — ENCRYPTION & DECRYPTION
⬜ 15. Create /encryption/crypto.js

Add functions:

encryptText

decryptText

⬜ 16. Update AddNoteScreen

Get key

Encrypt note text

Save only encryptedText + metadata

⬜ 17. Update HomeScreen

Show encryptedText in the list only

Never show plaintext

⬜ 18. Update ViewNoteScreen

Get encryptedText

Get key

Decrypt

Display plaintext

🟫 PHASE 6 — CLEANUP & SECURITY
⬜ 19. Remove all plaintext code

No plaintext should be stored anywhere.

⬜ 20. Add loading indicators (optional)
⬜ 21. Add delete functionality (optional)
⬜ 22. Test full flow

Add note

Ensure encryption works

Reopen app — key persists

Decrypt on ViewNoteScreen

Confirm only encrypted strings in storage