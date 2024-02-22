import { Grid, Box, Stack, Typography } from '@mui/material';
import React, { SetStateAction, useState } from 'react';
import { TextEditorCommon } from '../editor';
import { EditIcon } from '../output-card/cards/CreateNewJobRevamp';

type Props = {
  headingName?: string;
  notes: string;
  editingNote: boolean;
  setEditingNote: React.Dispatch<SetStateAction<boolean>>;
  onSaveNotes: React.Dispatch<SetStateAction<string>>;
  errorSection?: boolean;
  placeholder?: string;
  saveOnMouseLeave?: boolean;
  quitImmediately?: boolean;
  isLoading?: boolean;
};

export const NOTES_MAX_SIZE = 409600 //400kb

export default function NoteSection({
  headingName = 'Notes',
  notes,
  editingNote,
  setEditingNote,
  onSaveNotes,
  errorSection,
  placeholder,
  saveOnMouseLeave,
  quitImmediately,
  isLoading,
}: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <Grid
      container 
      spacing={1}
      sx={{ cursor: 'pointer' }}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setEditingNote(true)}
    >
      <Grid item xs={1.5}>
        <Box sx={{ cursor: 'pointer' }}>
          <Typography
            fontWeight={600}
            fontSize={'16px'}
            sx={{ color: errorSection ? 'red' : editingNote || hovered ? '#9859E0' : '#21054C' }}
            dangerouslySetInnerHTML={{ __html: headingName }}
          />
        </Box>
      </Grid>
      <Grid item xs={10.5}>
        <Stack direction='row' width="100%" justifyContent='space-between'>
          <TextEditorCommon
            htmlContent={notes}
            onSave={onSaveNotes}
            defaultIsEditMode={editingNote}
            setDefaultIsEditMode={setEditingNote}
            placeholder={placeholder || 'Add your personal notes here'}
            saveOnMouseLeave={saveOnMouseLeave}
            quitImmediately={quitImmediately}
            isLoading={isLoading}
            isRequired={false}
            sizeLimit={NOTES_MAX_SIZE}
          />
          {hovered && !editingNote ? <EditIcon /> : null}
        </Stack>
      </Grid>
    </Grid>
  );
}
