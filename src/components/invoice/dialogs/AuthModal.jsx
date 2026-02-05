import React from 'react';
import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from 'lucide-react';

const AuthModal = ({ isOpen, onClose, actionText }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-deep-blue flex items-center">
            <AlertTriangle className="w-6 h-6 mr-2 text-yellow-500" /> Authenticatie Vereist
          </DialogTitle>
          <DialogDescription className="mt-2 text-gray-600">
            Je moet ingelogd zijn om {actionText}. Log in of maak een account aan om door te gaan.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-end">
          <Button variant="outline" onClick={onClose}>Annuleren</Button>
          <Button asChild variant="default" className="bg-deep-blue hover:bg-deep-blue/90">
            <Link href="/login" onClick={onClose}>Inloggen</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/register" onClick={onClose}>Registreren</Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;