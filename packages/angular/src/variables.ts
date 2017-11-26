/**
 * This file is generated by 'file2variable-cli'
 * It is not mean to be edited by hand
 */
export const arrayEditorTemplateHtml = `<div [class]="errorMessage ? theme.errorRow : theme.row"><h3>{{titleToShow}}<div [class]="theme.buttonGroup" [style]="buttonGroupStyleString"><optional [required]="required" [value]="value" [isReadOnly]="isReadOnly" [theme]="theme" [locale]="locale" (toggleOptional)="toggleOptional()"></optional><icon (onClick)="collapseOrExpand()" [text]="collapsed ? icon.expand : icon.collapse" [theme]="theme" [icon]="icon"></icon><icon *ngIf="hasAddButton" (onClick)="addItem()" [text]="icon.add" [theme]="theme" [icon]="icon"></icon><icon *ngIf="hasDeleteButtonFunction" (onClick)="onDelete.emit()" [text]="icon.delete" [theme]="theme" [icon]="icon"></icon></div></h3><description [theme]="theme" [message]="schema.description" [notEmpty]="true"></description><div #drakContainer [class]="theme.rowContainer"><div *ngIf="showFilter" [class]="theme.row"><input [class]="theme.formControl" (change)="onFilterChange($event)" (keyup)="onFilterChange($event)" [value]="filter"></div><div *ngFor="let item of filteredValues; trackBy:trackByFunction" [attr.data-index]="item.i" [class]="theme.rowContainer"><editor [schema]="schema.items" [title]="item.i" [initialValue]="value[item.i]" (updateValue)="onChange(item.i, $event)" [theme]="theme" [icon]="icon" [locale]="locale" [required]="true" [readonly]="isReadOnly" (onDelete)="onDeleteFunction(item.i)" [hasDeleteButton]="true" [dragula]="dragula" [md]="md" [hljs]="hljs" [forceHttps]="forceHttps"></editor></div></div><description [theme]="theme" [message]="errorMessage"></description></div>`;
export const booleanEditorTemplateHtml = `<div [class]="theme.row"><label [class]="theme.label">{{titleToShow}}<div [class]="theme.buttonGroup" [style]="buttonGroupStyle"><optional [required]="required" [value]="value" [isReadOnly]="isReadOnly" [theme]="theme" [locale]="locale" (toggleOptional)="toggleOptional()"></optional><icon *ngIf="hasDeleteButtonFunction" (onClick)="onDelete.emit()" [text]="icon.delete" [theme]="theme" [icon]="icon"></icon></div></label><div *ngIf="value !== undefined"><div [class]="theme.radiobox"><label><input type="radio" (change)="onChange($event)" [checked]="value" [disabled]="isReadOnly"> {{locale.info.true}}</label></div><div [class]="theme.radiobox"><label><input type="radio" (change)="onChange($event)" [checked]="!value" [disabled]="isReadOnly"> {{locale.info.false}}</label></div></div><description [theme]="theme" [message]="schema.description"></description></div>`;
export const editorTemplateHtml = `<object-editor *ngIf="schema.type === 'object'" [schema]="schema" [initialValue]="initialValue" [title]="title" [theme]="theme" [locale]="locale" [icon]="icon" [readonly]="readonly" [required]="required" (updateValue)="updateValue.emit($event)" (onDelete)="onDelete.emit()" [hasDeleteButton]="hasDeleteButton" [dragula]="dragula" [md]="md" [hljs]="hljs" [forceHttps]="forceHttps"></object-editor><array-editor *ngIf="schema.type === 'array'" [schema]="schema" [initialValue]="initialValue" [title]="title" [theme]="theme" [locale]="locale" [icon]="icon" [readonly]="readonly" [required]="required" (updateValue)="updateValue.emit($event)" (onDelete)="onDelete.emit()" [hasDeleteButton]="hasDeleteButton" [dragula]="dragula" [md]="md" [hljs]="hljs" [forceHttps]="forceHttps"></array-editor><number-editor *ngIf="schema.type === 'number' || schema.type === 'integer'" [schema]="schema" [initialValue]="initialValue" [title]="title" [theme]="theme" [locale]="locale" [icon]="icon" [readonly]="readonly" [required]="required" (updateValue)="updateValue.emit($event)" (onDelete)="onDelete.emit()" [hasDeleteButton]="hasDeleteButton"></number-editor><boolean-editor *ngIf="schema.type === 'boolean'" [schema]="schema" [initialValue]="initialValue" [title]="title" [theme]="theme" [locale]="locale" [icon]="icon" [readonly]="readonly" [required]="required" (updateValue)="updateValue.emit($event)" (onDelete)="onDelete.emit()" [hasDeleteButton]="hasDeleteButton"></boolean-editor><null-editor *ngIf="schema.type === 'null'" [schema]="schema" [initialValue]="initialValue" [title]="title" [theme]="theme" [locale]="locale" [icon]="icon" [readonly]="readonly" [required]="required" (updateValue)="updateValue.emit($event)" (onDelete)="onDelete.emit()" [hasDeleteButton]="hasDeleteButton"></null-editor><string-editor *ngIf="schema.type === 'string'" [schema]="schema" [initialValue]="initialValue" [title]="title" [theme]="theme" [locale]="locale" [icon]="icon" [readonly]="readonly" [required]="required" (updateValue)="updateValue.emit($event)" (onDelete)="onDelete.emit()" [hasDeleteButton]="hasDeleteButton" [dragula]="dragula" [md]="md" [hljs]="hljs" [forceHttps]="forceHttps"></string-editor>`;
export const iconTemplateHtml = `<button [class]="theme.button" (click)="onClick.emit()"><span *ngIf="icon.isText">{{text}}</span><i *ngIf="!icon.isText" [class]="text"></i></button>`;
export const indexTemplateHtml = `<editor [schema]="schema" [initialValue]="initialValue" [theme]="themeObject" [locale]="localeObject" [icon]="iconObject" [readonly]="readonly" [required]="true" (updateValue)="updateValue.emit($event)" [dragula]="dragula" [md]="md" [hljs]="hljs" [forceHttps]="forceHttps"></editor>`;
export const nullEditorTemplateHtml = `<div [class]="theme.row"><label [class]="theme.label">{{titleToShow}}<div [class]="theme.buttonGroup" [style]="buttonGroupStyle"><optional [required]="required" [value]="value" [isReadOnly]="isReadOnly" [theme]="theme" [locale]="locale" (toggleOptional)="toggleOptional()"></optional><icon *ngIf="hasDeleteButtonFunction" (onClick)="onDelete.emit()" [text]="icon.delete" [theme]="theme" [icon]="icon"></icon></div></label><description [theme]="theme" [message]="schema.description"></description></div>`;
export const numberEditorTemplateHtml = `<div [class]="errorMessage ? theme.errorRow : theme.row"><label [class]="theme.label">{{titleToShow}}<div [class]="theme.buttonGroup" [style]="buttonGroupStyle"><optional [required]="required" [value]="value" [isReadOnly]="isReadOnly" [theme]="theme" [locale]="locale" (toggleOptional)="toggleOptional()"></optional><icon *ngIf="hasDeleteButtonFunction" (onClick)="onDelete.emit()" [text]="icon.delete" [theme]="theme" [icon]="icon"></icon></div></label><input *ngIf="useInput" [class]="theme.formControl" type="number" (change)="onChange($event)" (keyup)="onChange($event)" [defaultValue]="value" [readOnly]="isReadOnly" [disabled]="isReadOnly"><select *ngIf="useSelect" [class]="theme.formControl" type="number" (change)="onChange"><option *ngFor="let e of schema.enum; let i = index; trackBy:trackByFunction" [value]="e" [selected]="value === e">{{e}}</option></select><description [theme]="theme" [message]="schema.description"></description><description [theme]="theme" [message]="errorMessage"></description></div>`;
export const objectEditorTemplateHtml = `<div [class]="errorMessage ? theme.errorRow : theme.row"><h3>{{titleToShow}}<div [class]="theme.buttonGroup" [style]="buttonGroupStyle"><optional [required]="required" [value]="value" [isReadOnly]="isReadOnly" [theme]="theme" [locale]="locale" (toggleOptional)="toggleOptional()"></optional><icon (onClick)="collapseOrExpand()" [text]="collapsed ? icon.expand : icon.collapse" [theme]="theme" [icon]="icon"></icon><icon *ngIf="hasDeleteButtonFunction" (onClick)="onDelete.emit()" [text]="icon.delete" [theme]="theme" [icon]="icon"></icon></div></h3><description [theme]="theme" [message]="schema.description"></description><div *ngIf="!collapsed && value !== undefined" [class]="theme.rowContainer"><div *ngIf="showFilter" [class]="theme.row"><input [class]="theme.formControl" (change)="onFilterChange($event)" (keyup)="onFilterChange($event)" [value]="filter"></div><editor *ngFor="let p of filteredProperties; trackBy: trackByFunction" [schema]="p.schema" [title]="p.schema.title || p.property" [initialValue]="value[p.property]" (updateValue)="onChange(p.property, $event)" [theme]="theme" [icon]="icon" [locale]="locale" [required]="isRequired(p.property)" [readonly]="isReadOnly" [dragula]="dragula" [md]="md" [hljs]="hljs" [forceHttps]="forceHttps"></editor></div><description [theme]="theme" [message]="errorMessage"></description></div>`;
export const optionalTemplateHtml = `<div *ngIf="hasOptionalCheckbox" [class]="theme.optionalCheckbox"><label><input type="checkbox" (change)="toggleOptional.emit()" [checked]="value === undefined" [disabled]="isReadOnly"> {{locale.info.notExists}}</label></div>`;
export const stringEditorTemplateHtml = `<div [class]="errorMessage ? theme.errorRow : theme.row"><label [class]="theme.label">{{titleToShow}}<div [class]="theme.buttonGroup" [style]="buttonGroupStyle"><optional [required]="required" [value]="value" [isReadOnly]="isReadOnly" [theme]="theme" [locale]="locale" (toggleOptional)="toggleOptional()"></optional><icon *ngIf="hasDeleteButtonFunction" (onClick)="onDelete.emit()" [text]="icon.delete" [theme]="theme" [icon]="icon"></icon><icon *ngIf="canPreview" (onClick)="collapseOrExpand()" [text]="collapsed ? icon.expand : icon.collapse" [theme]="theme" [icon]="icon"></icon></div></label><textarea *ngIf="useTextArea" [class]="theme.formControl" (change)="onChange($event)" (keyup)="onChange($event)" rows="10" [readOnly]="isReadOnly" [disabled]="isReadOnly">{{value}}</textarea><input *ngIf="useInput" [class]="theme.formControl" [type]="schema.format" (change)="onChange($event)" (keyup)="onChange($event)" [defaultValue]="value" [readOnly]="isReadOnly" [disabled]="isReadOnly"><select *ngIf="useSelect" [class]="theme.formControl" (change)="onChange($event)"><option *ngFor="let e of schema.enum; let i = index; trackBy:trackByFunction" [value]="e" [selected]="value === e">{{e}}</option></select><img *ngIf="willPreviewImage" class="schema-based-json-editor-image-preview" [src]="getImageUrl"><markdown-tip *ngIf="useTextArea && willPreviewMarkdown" [locale]="locale.markdownTipLocale"></markdown-tip><div *ngIf="willPreviewMarkdown" [innerHTML]="getMarkdown"></div><pre *ngIf="willPreviewCode"><code [innerHTML]="getCode"></code></pre><description [theme]="theme" [message]="schema.description"></description><description [theme]="theme" [message]="errorMessage"></description></div>`;
