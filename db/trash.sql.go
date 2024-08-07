// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.26.0
// source: trash.sql

package db

import (
	"context"
	"database/sql"
)

const addNoteToTrash = `-- name: AddNoteToTrash :one
INSERT INTO
  trash (
    note_id,
    content,
    title,
    created_at,
    modified_at,
    tags
  )
VALUES
  (?, ?, ?, ?, ?, ?) RETURNING id,
  note_id,
  content,
  title,
  created_at,
  modified_at,
  tags
`

type AddNoteToTrashParams struct {
	NoteID     int64
	Content    string
	Title      string
	CreatedAt  string
	ModifiedAt string
	Tags       sql.NullString
}

// Trashed Note Queries
func (q *Queries) AddNoteToTrash(ctx context.Context, arg AddNoteToTrashParams) (Trash, error) {
	row := q.db.QueryRowContext(ctx, addNoteToTrash,
		arg.NoteID,
		arg.Content,
		arg.Title,
		arg.CreatedAt,
		arg.ModifiedAt,
		arg.Tags,
	)
	var i Trash
	err := row.Scan(
		&i.ID,
		&i.NoteID,
		&i.Content,
		&i.Title,
		&i.CreatedAt,
		&i.ModifiedAt,
		&i.Tags,
	)
	return i, err
}

const deleteNoteFromTrash = `-- name: DeleteNoteFromTrash :exec
DELETE FROM trash
WHERE
  id = ?
`

func (q *Queries) DeleteNoteFromTrash(ctx context.Context, id int64) error {
	_, err := q.db.ExecContext(ctx, deleteNoteFromTrash, id)
	return err
}

const getNoteFromTrash = `-- name: GetNoteFromTrash :one
SELECT
  id,
  note_id,
  content,
  title,
  created_at,
  modified_at,
  tags
FROM
  trash
WHERE
  id = ?
`

func (q *Queries) GetNoteFromTrash(ctx context.Context, id int64) (Trash, error) {
	row := q.db.QueryRowContext(ctx, getNoteFromTrash, id)
	var i Trash
	err := row.Scan(
		&i.ID,
		&i.NoteID,
		&i.Content,
		&i.Title,
		&i.CreatedAt,
		&i.ModifiedAt,
		&i.Tags,
	)
	return i, err
}
