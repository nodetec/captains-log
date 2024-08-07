package db

import (
	"context"
	"fmt"
)

func (q *Queries) ListNotesByNotebook(ctx context.Context, notebookID int64, limit, offset int64, orderBy, sortDirection string) ([]Note, error) {
	orderClause := "modified_at DESC"
	switch orderBy {
	case "modified_at":
		orderClause = fmt.Sprintf("modified_at %s", sortDirection)
	case "created_at":
		orderClause = fmt.Sprintf("created_at %s", sortDirection)
	case "title":
		orderClause = fmt.Sprintf("title %s", sortDirection)
	default:
		orderClause = fmt.Sprintf("modified_at %s", sortDirection)
	}

	query := fmt.Sprintf(`
	SELECT
		id,
		status_id,
		notebook_id,
		content,
		title,
		created_at,
		modified_at,
		published_at,
		event_id,
    pinned,
		notetype,
		filetype
	FROM
		notes
	WHERE
		(notebook_id = ?)
	ORDER BY
		%s
	LIMIT
		?
	OFFSET
		?;`, orderClause)

	rows, err := q.db.QueryContext(ctx, query, notebookID, limit, offset)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var notes []Note
	for rows.Next() {
		var note Note
		if err := rows.Scan(
			&note.ID,
			&note.StatusID,
			&note.NotebookID,
			&note.Content,
			&note.Title,
			&note.CreatedAt,
			&note.ModifiedAt,
			&note.PublishedAt,
			&note.EventID,
      &note.Pinned,
			&note.Notetype,
			&note.Filetype,
		); err != nil {
			return nil, err
		}
		notes = append(notes, note)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return notes, nil
}
