/**
 * This file is generated by 'file2variable-cli'
 * It is not mean to be edited by hand
 */
// tslint:disable

export const anyEditorTemplateHtml = `<div [class]="className"><label [class]="theme.title">{{titleToShow}}<div [class]="theme.buttonGroup" [style]="buttonGroupStyle"><optional [required]="required" [value]="value" [isReadOnly]="isReadOnly" [theme]="theme" [locale]="locale" (toggleOptional)="toggleOptional()"></optional><icon *ngIf="hasDeleteButtonFunction" (onClick)="onDelete.emit()" [text]="icon.delete" [theme]="theme" [icon]="icon"></icon></div></label><div *ngIf="monacoEditor" #monacoEditorRef [ngStyle]="{ height: '400px', width: '90%' }"></div><description [theme]="theme" [message]="schema.description"></description></div>`
export const arrayEditorTemplateHtml = `<div [class]="className"><h3>{{titleToShow}}<div [class]="theme.buttonGroup" [style]="buttonGroupStyleString"><optional [required]="required" [value]="value" [isReadOnly]="isReadOnly" [theme]="theme" [locale]="locale" (toggleOptional)="toggleOptional()"></optional><icon *ngIf="!disableCollapse && value && value.length > 0 && !schema.enum" (onClick)="collapseOrExpand()" [text]="collapsed ? icon.expand : icon.collapse" [theme]="theme" [icon]="icon"></icon><icon *ngIf="hasAddButton" (onClick)="addItem()" [text]="icon.add" [theme]="theme" [icon]="icon"></icon><icon *ngIf="hasDeleteButtonFunction" (onClick)="onDelete.emit()" [text]="icon.delete" [theme]="theme" [icon]="icon"></icon></div></h3><description [theme]="theme" [message]="schema.description"></description><div *ngIf="schema.enum"><select2 *ngIf="schema.format === 'select2' && !noSelect2" [data]="options" [value]="value" [disabled]="isReadOnly" [multiple]="true" (update)="onChangeSelect2(\$event)"></select2><ng-container *ngIf="schema.format !== 'select2' || noSelect2"><span *ngFor="let option of options; trackBy:trackByOptions" [class]="theme.checkbox"><label><input type="checkbox" (change)="onChangeCheckbox(option.value)" [checked]="isChecked(option.value)" [disabled]="isReadOnly"> {{option.label}}</label></span></ng-container></div><div *ngIf="!schema.enum" #drakContainer [class]="theme.card"><div *ngIf="showFilter" [class]="theme.row"><input [class]="theme.input" (change)="onFilterChange(\$event)" (keyup)="onFilterChange(\$event)" [value]="filter"></div><div *ngFor="let item of filteredValues; trackBy:trackByFunction" [attr.data-index]="item.i" [class]="theme.card"><editor [schema]="schema.items" [title]="item.i" [initialValue]="value![item.i]" (updateValue)="onChange(item.i, \$event)" [theme]="theme" [icon]="icon" [locale]="locale" [required]="true" [readonly]="isReadOnly" (onDelete)="onDeleteFunction(item.i)" [hasDeleteButton]="true" [dragula]="dragula" [md]="md" [hljs]="hljs" [forceHttps]="forceHttps" [disableCollapse]="disableCollapse" [minItemCountIfNeedFilter]="minItemCountIfNeedFilter" [noSelect2]="noSelect2" [monacoEditor]="monacoEditor"></editor></div></div><description [theme]="theme" [message]="errorMessage"></description></div>`
export const booleanEditorTemplateHtml = `<div [class]="className"><label [class]="theme.title">{{titleToShow}}<div [class]="theme.buttonGroup" [style]="buttonGroupStyle"><optional [required]="required" [value]="value" [isReadOnly]="isReadOnly" [theme]="theme" [locale]="locale" (toggleOptional)="toggleOptional()"></optional><icon *ngIf="hasDeleteButtonFunction" (onClick)="onDelete.emit()" [text]="icon.delete" [theme]="theme" [icon]="icon"></icon></div></label><div *ngIf="value !== undefined"><span *ngIf="schema.format === 'checkbox'" [class]="theme.checkbox"><label><input type="checkbox" (change)="onChange()" [checked]="value" [disabled]="isReadOnly"> {{locale.info.true}}</label></span><select *ngIf="schema.format === 'select'" [class]="theme.select" [value]="value" [disabled]="isReadOnly" (change)="onChange()"><option :value="true">{{locale.info.true}}</option><option :value="false">{{locale.info.false}}</option></select><span *ngIf="schema.format === undefined" [class]="theme.radiobox"><label><input type="radio" (change)="onChange()" [checked]="value" [disabled]="isReadOnly"> {{locale.info.true}}</label></span><span *ngIf="schema.format === undefined" [class]="theme.radiobox"><label><input type="radio" (change)="onChange()" [checked]="!value" [disabled]="isReadOnly"> {{locale.info.false}}</label></span></div><description [theme]="theme" [message]="schema.description"></description></div>`
export const editorTemplateHtml = `<object-editor *ngIf="schema.type === 'object'" [schema]="schema" [initialValue]="initialValue" [title]="title" [theme]="theme" [locale]="locale" [icon]="icon" [readonly]="readonly" [required]="required" (updateValue)="updateValue.emit(\$event)" (onDelete)="onDelete.emit()" [hasDeleteButton]="hasDeleteButton" [dragula]="dragula" [md]="md" [hljs]="hljs" [forceHttps]="forceHttps" [disableCollapse]="disableCollapse" [noSelect2]="noSelect2" [minItemCountIfNeedFilter]="minItemCountIfNeedFilter" [monacoEditor]="monacoEditor"></object-editor><array-editor *ngIf="schema.type === 'array'" [schema]="schema" [initialValue]="initialValue" [title]="title" [theme]="theme" [locale]="locale" [icon]="icon" [readonly]="readonly" [required]="required" (updateValue)="updateValue.emit(\$event)" (onDelete)="onDelete.emit()" [hasDeleteButton]="hasDeleteButton" [dragula]="dragula" [md]="md" [hljs]="hljs" [forceHttps]="forceHttps" [disableCollapse]="disableCollapse" [noSelect2]="noSelect2" [minItemCountIfNeedFilter]="minItemCountIfNeedFilter" [monacoEditor]="monacoEditor"></array-editor><number-editor *ngIf="schema.type === 'number' || schema.type === 'integer'" [schema]="schema" [initialValue]="initialValue" [title]="title" [theme]="theme" [locale]="locale" [icon]="icon" [readonly]="readonly" [required]="required" (updateValue)="updateValue.emit(\$event)" (onDelete)="onDelete.emit()" [hasDeleteButton]="hasDeleteButton" [noSelect2]="noSelect2"></number-editor><boolean-editor *ngIf="schema.type === 'boolean'" [schema]="schema" [initialValue]="initialValue" [title]="title" [theme]="theme" [locale]="locale" [icon]="icon" [readonly]="readonly" [required]="required" (updateValue)="updateValue.emit(\$event)" (onDelete)="onDelete.emit()" [hasDeleteButton]="hasDeleteButton"></boolean-editor><null-editor *ngIf="schema.type === 'null'" [schema]="schema" [initialValue]="initialValue" [title]="title" [theme]="theme" [locale]="locale" [icon]="icon" [readonly]="readonly" [required]="required" (updateValue)="updateValue.emit(\$event)" (onDelete)="onDelete.emit()" [hasDeleteButton]="hasDeleteButton"></null-editor><string-editor *ngIf="schema.type === 'string'" [schema]="schema" [initialValue]="initialValue" [title]="title" [theme]="theme" [locale]="locale" [icon]="icon" [readonly]="readonly" [required]="required" (updateValue)="updateValue.emit(\$event)" (onDelete)="onDelete.emit()" [hasDeleteButton]="hasDeleteButton" [dragula]="dragula" [md]="md" [hljs]="hljs" [forceHttps]="forceHttps" [noSelect2]="noSelect2" [monacoEditor]="monacoEditor"></string-editor><any-editor *ngIf="schema.type === undefined" [schema]="schema" [initialValue]="initialValue" [title]="title" [theme]="theme" [locale]="locale" [icon]="icon" [readonly]="readonly" [required]="required" (updateValue)="updateValue.emit(\$event)" (onDelete)="onDelete.emit()" [hasDeleteButton]="hasDeleteButton" [monacoEditor]="monacoEditor"></any-editor>`
export const iconTemplateHtml = `<button [class]="theme.button" (click)="onClick.emit()"><span *ngIf="icon.isText">{{text}}</span><i *ngIf="!icon.isText" [class]="text"></i></button>`
export const indexTemplateHtml = `<editor [schema]="schema" [initialValue]="initialValue" [theme]="themeObject" [locale]="localeObject" [icon]="iconObject" [readonly]="readonly" [required]="true" (updateValue)="updateValue.emit(\$event)" [dragula]="dragula" [md]="md" [hljs]="hljs" [forceHttps]="forceHttps" [disableCollapse]="disableCollapse" [noSelect2]="noSelect2" [minItemCountIfNeedFilter]="minItemCountIfNeedFilter" [monacoEditor]="monacoEditor"></editor>`
export const nullEditorTemplateHtml = `<div [class]="theme.row"><label [class]="theme.title">{{titleToShow}}<div [class]="theme.buttonGroup" [style]="buttonGroupStyle"><optional [required]="required" [value]="value" [isReadOnly]="isReadOnly" [theme]="theme" [locale]="locale" (toggleOptional)="toggleOptional()"></optional><icon *ngIf="hasDeleteButtonFunction" (onClick)="onDelete.emit()" [text]="icon.delete" [theme]="theme" [icon]="icon"></icon></div></label><description [theme]="theme" [message]="schema.description"></description></div>`
export const numberEditorTemplateHtml = `<div [class]="className"><label [class]="theme.title">{{titleToShow}}<div [class]="theme.buttonGroup" [style]="buttonGroupStyle"><optional [required]="required" [value]="value" [isReadOnly]="isReadOnly" [theme]="theme" [locale]="locale" (toggleOptional)="toggleOptional()"></optional><icon *ngIf="hasDeleteButtonFunction" (onClick)="onDelete.emit()" [text]="icon.delete" [theme]="theme" [icon]="icon"></icon></div></label><input *ngIf="useInput" [class]="errorMessage ? theme.errorInput : theme.input" type="number" (change)="onChange(\$event)" (keyup)="onChange(\$event)" [defaultValue]="value" [readOnly]="isReadOnly" [disabled]="isReadOnly"><select2 *ngIf="useSelect2Component" [data]="options" [value]="value" [disabled]="isReadOnly" (update)="updateSelection(\$event)"></select2><select *ngIf="useSelectComponent" [class]="theme.select" [value]="value" [disabled]="isReadOnly" (change)="updateSelection(+\$event.target.value)"><option *ngFor="let option of options; trackBy:trackByFunction" [value]="option.value">{{option.label}}</option></select><div *ngIf="useRadioBoxComponent"><span *ngFor="let option of options; trackBy:trackByFunction" [class]="theme.radiobox"><label><input type="radio" (change)="updateSelection(option.value)" [checked]="value === option.value" [disabled]="isReadOnly"> {{option.label}}</label></span></div><description [theme]="theme" [message]="schema.description"></description><description [theme]="theme" [message]="errorMessage"></description></div>`
export const objectEditorTemplateHtml = `<div [class]="className"><h3>{{titleToShow}}<div [class]="theme.buttonGroup" [style]="buttonGroupStyle"><optional [required]="required" [value]="value" [isReadOnly]="isReadOnly" [theme]="theme" [locale]="locale" (toggleOptional)="toggleOptional()"></optional><icon *ngIf="!disableCollapse" (onClick)="collapseOrExpand()" [text]="collapsed ? icon.expand : icon.collapse" [theme]="theme" [icon]="icon"></icon><icon *ngIf="hasDeleteButtonFunction" (onClick)="onDelete.emit()" [text]="icon.delete" [theme]="theme" [icon]="icon"></icon></div></h3><description [theme]="theme" [message]="schema.description"></description><div *ngIf="!collapsed && value !== undefined" [class]="theme.card"><div *ngIf="showFilter" [class]="theme.row"><input [class]="theme.input" (change)="onFilterChange(\$event)" (keyup)="onFilterChange(\$event)" [placeholder]="locale.info.search" [value]="filter"></div><editor *ngFor="let p of filteredProperties; trackBy: trackByFunction" [schema]="p.schema" [title]="p.schema.title || p.property" [initialValue]="value[p.property]" (updateValue)="onChange(p.property, \$event)" [theme]="theme" [icon]="icon" [locale]="locale" [required]="isRequired(p.property)" [readonly]="isReadOnly" [dragula]="dragula" [md]="md" [hljs]="hljs" [forceHttps]="forceHttps" [disableCollapse]="disableCollapse" [minItemCountIfNeedFilter]="minItemCountIfNeedFilter" [noSelect2]="noSelect2" [monacoEditor]="monacoEditor"></editor></div><description [theme]="theme" [message]="errorMessage"></description></div>`
export const optionalTemplateHtml = `<div *ngIf="hasOptionalCheckbox" [class]="theme.checkbox"><label><input type="checkbox" (change)="toggleOptional.emit()" [checked]="value === undefined" [disabled]="isReadOnly"> {{locale.info.notExists}}</label></div>`
export const stringEditorTemplateHtml = `<div [class]="className"><label [class]="theme.title">{{titleToShow}}<div [class]="theme.buttonGroup" [style]="buttonGroupStyle"><optional [required]="required" [value]="value" [isReadOnly]="isReadOnly" [theme]="theme" [locale]="locale" (toggleOptional)="toggleOptional()"></optional><icon *ngIf="hasDeleteButtonFunction" (onClick)="onDelete.emit()" [text]="icon.delete" [theme]="theme" [icon]="icon"></icon><icon *ngIf="canPreview" (onClick)="collapseOrExpand()" [text]="collapsed ? icon.expand : icon.collapse" [theme]="theme" [icon]="icon"></icon></div></label><file-uploader *ngIf="canUpload" [locale]="locale.fileUploaderLocale" (fileGot)="fileGot(\$event)"></file-uploader><div *ngIf="useTextArea && monacoEditor && schema.format === 'json'" #monacoEditorRef [ngStyle]="{ height: '400px', width: '90%', display: collapsed ? 'none' : undefined }"></div><textarea *ngIf="useTextArea && (!monacoEditor || schema.format !== 'json')" [class]="errorMessage ? theme.errorTextarea : theme.textarea" (change)="onChange(\$event)" (keyup)="onChange(\$event)" rows="10" [readOnly]="isReadOnly" [disabled]="isReadOnly">{{value}}</textarea><input *ngIf="useInput" [class]="errorMessage ? theme.errorInput : theme.input" [type]="schema.format" [step]="schema.step || 1" (change)="onChange(\$event)" (keyup)="onChange(\$event)" [defaultValue]="value" [readOnly]="isReadOnly" [disabled]="isReadOnly"><select2 *ngIf="useSelect2Component" [data]="options" [value]="value" [disabled]="isReadOnly" (update)="updateSelection(\$event)"></select2><select *ngIf="useSelectComponent" [class]="theme.select" [value]="value" [disabled]="isReadOnly" (change)="updateSelection(\$event.target.value)"><option *ngFor="let option of options; trackBy:trackByFunction" [value]="option.value">{{option.label}}</option></select><div *ngIf="useRadioBoxComponent"><span *ngFor="let option of options; trackBy:trackByFunction" [class]="theme.radiobox"><label><input type="radio" (change)="updateSelection(option.value)" [checked]="value === option.value" [disabled]="isReadOnly"> {{option.label}}</label></span></div><img *ngIf="willPreviewImage" class="schema-based-json-editor-image-preview" [src]="getImageUrl"><markdown-tip *ngIf="useTextArea && !collapsed && willPreviewMarkdown" [locale]="locale.markdownTipLocale"></markdown-tip><div *ngIf="willPreviewMarkdown" [innerHTML]="getMarkdown"></div><pre *ngIf="willPreviewCode"><code [innerHTML]="getCode"></code></pre><description [theme]="theme" [message]="schema.description"></description><description [theme]="theme" [message]="errorMessage"></description></div>`
// tslint:enable
