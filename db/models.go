// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.26.0

package db

import (
	"database/sql"
)

type NostrKey struct {
	ID         int64
	Nsec       string
	Npub       string
	Active     bool
	LoggedIn   bool
	CreatedAt  string
	ModifiedAt string
}

type Note struct {
	ID          int64
	StatusID    sql.NullInt64
	NotebookID  int64
	Content     string
	Title       string
	CreatedAt   string
	ModifiedAt  string
	PublishedAt sql.NullString
	EventID     sql.NullString
	Pinned      sql.NullBool
}

type NoteTag struct {
	NoteID sql.NullInt64
	TagID  sql.NullInt64
}

type Notebook struct {
	ID        int64
	Name      string
	CreatedAt string
}

type NotebookTag struct {
	NotebookID sql.NullInt64
	TagID      sql.NullInt64
}

type NotesFt struct {
	Content string
}

type Relay struct {
	ID         int64
	Url        string
	Read       bool
	Write      bool
	Sync       bool
	CreatedAt  string
	ModifiedAt string
}

type Setting struct {
	Key   string
	Value string
}

type Tag struct {
	ID        int64
	Name      string
	Color     sql.NullString
	Icon      sql.NullString
	CreatedAt string
}

type Trash struct {
	ID         int64
	NoteID     int64
	Content    string
	Title      string
	CreatedAt  string
	ModifiedAt string
	Tags       sql.NullString
}

type TrashFt struct {
	Content string
}
