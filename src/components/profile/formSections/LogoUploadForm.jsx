import React from 'react';
import { Button } from '@/components/ui/button';
import { UploadCloud, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const LogoUploadForm = ({ logoPreview, onLogoChange, fileInputRef, disabled, onRemoveLogo }) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-4">
        {logoPreview ? (
          <div className="relative group">
            <img-replace
              src={logoPreview} 
              alt="Logo voorbeeld" 
              className="h-24 w-24 rounded-lg object-contain border border-gray-300 p-1 bg-white"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className={cn(
                "absolute top-1 right-1 h-6 w-6 p-1 rounded-full bg-red-500 text-white opacity-0 group-hover:opacity-100 transition-opacity",
                disabled && "hidden"
              )}
              onClick={() => {
                if (fileInputRef.current) fileInputRef.current.value = ""; // Clear file input
                onLogoChange({ target: { files: [null] } }); // Trigger parent state update
              }}
              disabled={disabled}
            >
              <XCircle className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <div className="h-24 w-24 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50">
            <UploadCloud className="h-8 w-8 text-gray-400" />
          </div>
        )}
        <input
          type="file"
          id="logo"
          name="logo"
          accept="image/png, image/jpeg, image/svg+xml"
          onChange={onLogoChange}
          ref={fileInputRef}
          className="hidden"
          disabled={disabled}
        />
        <Button
          type="button"
          variant="outline"
          onClick={() => fileInputRef.current?.click()}
          disabled={disabled}
          className="text-gray-700 border-gray-300 hover:bg-gray-100"
        >
          <UploadCloud className="w-4 h-4 mr-2" />
          {logoPreview ? 'Ander logo kiezen' : 'Logo Uploaden'}
        </Button>
      </div>
      <p className="text-xs text-gray-500">Max. 2MB. Aanbevolen: PNG, JPG, SVG.</p>
    </div>
  );
};

export default LogoUploadForm;