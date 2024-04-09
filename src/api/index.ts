import { invoke } from "@tauri-apps/api/core";
import { APIResponse, CreateNoteRequest, ListNotesRequest, Note, Tag, TagNoteRequest, UpdateNoteRequest } from "~/types";

export const createNote = async (createNoteRequest: CreateNoteRequest) => {
  // TODO: error handling
  const response: APIResponse<Note> = await invoke("create_note", {
    createNoteRequest,
  });
  return response;
};

export const updateNote = async (updateNoteRequest: UpdateNoteRequest) => {
  // TODO: error handling
  const response: APIResponse<Note> = await invoke("update_note", {
    updateNoteRequest,
  });
  return response;
};


export const listNotes = async (listNotesRequest: ListNotesRequest) => {
  // TODO: error handling
  const response: APIResponse<Note[]> = await invoke("list_notes", {
    listNotesRequest,
  });
  return response;
};

export const listTags = async () => {
  // TODO: error handling
  const response: APIResponse<Tag[]> = await invoke("list_tags");
  console.log(response, "tags");
  return response;
};

export const tagNote = async (tagNoteRequest: TagNoteRequest) => {
  // TODO: error handling
  const response: APIResponse<undefined> = await invoke("tag_note", {
    tagNoteRequest,
  });
  return response;
};