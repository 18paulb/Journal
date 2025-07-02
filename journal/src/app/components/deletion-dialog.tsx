import React from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'; // Adjust imports as needed
import { Button } from '@/components/ui/button'; // Adjust import for your Button component

/**
 *
 * @param {boolean} show - The boolean state of "showDialog" (whether the dialog is visible or not).
 * @param {function} setShow - The setter function to toggle the "showDialog" state.
 * @param {string} title - The title to display in the dialog.
 * @param {string} description - The description to display in the dialog.
 * @param {function} onDelete - The function that will be called when the user presses the "Delete" button.
 * @returns {JSX.Element} The rendered dialog component.
 */

type DeleteDialogProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  description: string;
  onDelete: () => void;
};
export default function DeleteDialog({ show, setShow, title, description, onDelete }: DeleteDialogProps) {
  return (
    <Dialog open={show} onOpenChange={setShow}>
      <DialogTrigger asChild>
        <Button variant="destructive">{title}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={onDelete}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
