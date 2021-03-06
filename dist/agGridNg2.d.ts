import { EventEmitter, ViewContainerRef, ElementRef, QueryList, OnInit, AfterViewInit } from '@angular/core';
import { GridOptions, GridApi, ColumnApi } from 'ag-grid/main';
import { Ng2FrameworkFactory } from "./ng2FrameworkFactory";
import { AgGridColumn } from "./agGridColumn";
export declare class AgGridNg2 implements OnInit, AfterViewInit {
    private viewContainerRef;
    private ng2FrameworkFactory;
    private _nativeElement;
    private _initialised;
    private _destroyed;
    private gridParams;
    api: GridApi;
    columnApi: ColumnApi;
    columns: QueryList<AgGridColumn>;
    constructor(elementDef: ElementRef, viewContainerRef: ViewContainerRef, ng2FrameworkFactory: Ng2FrameworkFactory);
    private createComponentEvents();
    private validateSuppliedProperties();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: any): void;
    ngOnDestroy(): void;
    private globalEventListener(eventType, event);
    /**
     * inputs
     */
    gridOptions: GridOptions;
    slaveGrids: any;
    rowData: any;
    floatingTopRowData: any;
    floatingBottomRowData: any;
    columnDefs: any;
    defaultColDef: any;
    rowStyle: any;
    context: any;
    groupColumnDef: any;
    localeText: any;
    icons: any;
    datasource: any;
    viewportDatasource: any;
    groupRowRendererParams: any;
    aggFuncs: any;
    fullWidthCellRendererParams: any;
    sortingOrder: any;
    rowClass: any;
    rowSelection: any;
    overlayLoadingTemplate: any;
    overlayNoRowsTemplate: any;
    headerCellTemplate: any;
    quickFilterText: any;
    rowModelType: any;
    rowHeight: any;
    rowBuffer: any;
    colWidth: any;
    headerHeight: any;
    groupDefaultExpanded: any;
    minColWidth: any;
    maxColWidth: any;
    viewportRowModelPageSize: any;
    viewportRowModelBufferSize: any;
    layoutInterval: any;
    autoSizePadding: any;
    maxPagesInCache: any;
    maxConcurrentDatasourceRequests: any;
    paginationOverflowSize: any;
    paginationPageSize: any;
    paginationInitialRowCount: any;
    headerCellRenderer: any;
    localeTextFunc: any;
    groupRowInnerRenderer: any;
    groupRowRenderer: any;
    isScrollLag: any;
    isExternalFilterPresent: any;
    getRowHeight: any;
    doesExternalFilterPass: any;
    getRowClass: any;
    getRowStyle: any;
    getHeaderCellTemplate: any;
    traverseNode: any;
    getContextMenuItems: any;
    getMainMenuItems: any;
    processRowPostCreate: any;
    processCellForClipboard: any;
    getNodeChildDetails: any;
    groupRowAggNodes: any;
    getRowNodeId: any;
    isFullWidthCell: any;
    fullWidthCellRenderer: any;
    doesDataFlower: any;
    toolPanelSuppressRowGroups: any;
    toolPanelSuppressValues: any;
    toolPanelSuppressPivots: any;
    toolPanelSuppressPivotMode: any;
    suppressRowClickSelection: any;
    suppressCellSelection: any;
    suppressHorizontalScroll: any;
    debug: any;
    enableColResize: any;
    enableCellExpressions: any;
    enableSorting: any;
    enableServerSideSorting: any;
    enableFilter: any;
    enableServerSideFilter: any;
    angularCompileRows: any;
    angularCompileFilters: any;
    angularCompileHeaders: any;
    groupSuppressAutoColumn: any;
    groupSelectsChildren: any;
    groupIncludeFooter: any;
    groupUseEntireRow: any;
    groupSuppressRow: any;
    groupSuppressBlankHeader: any;
    forPrint: any;
    suppressMenuHide: any;
    rowDeselection: any;
    unSortIcon: any;
    suppressMultiSort: any;
    suppressScrollLag: any;
    singleClickEdit: any;
    suppressLoadingOverlay: any;
    suppressNoRowsOverlay: any;
    suppressAutoSize: any;
    suppressParentsInRowNodes: any;
    showToolPanel: any;
    suppressColumnMoveAnimation: any;
    suppressMovableColumns: any;
    suppressFieldDotNotation: any;
    enableRangeSelection: any;
    suppressEnterprise: any;
    rowGroupPanelShow: any;
    pivotPanelShow: any;
    suppressContextMenu: any;
    suppressMenuFilterPanel: any;
    suppressMenuMainPanel: any;
    suppressMenuColumnPanel: any;
    enableStatusBar: any;
    rememberGroupStateWhenNewData: any;
    enableCellChangeFlash: any;
    suppressDragLeaveHidesColumns: any;
    suppressMiddleClickScrolls: any;
    suppressPreventDefaultOnMouseWheel: any;
    suppressUseColIdForGroups: any;
    suppressCopyRowsToClipboard: any;
    pivotMode: any;
    suppressAggFuncInHeader: any;
    suppressColumnVirtualisation: any;
    suppressFocusAfterRefresh: any;
    functionsPassive: any;
    functionsReadOnly: any;
    defaultColGroupDef: any;
    editType: any;
    scrollbarWidth: any;
    groupRowInnerRendererFramework: any;
    groupRowRendererFramework: any;
    fullWidthCellRendererFramework: any;
    processSecondaryColDef: any;
    processSecondaryColGroupDef: any;
    suppressRowHoverClass: any;
    suppressTouch: any;
    animateRows: any;
    groupSelectsFiltered: any;
    groupRemoveSingleChildren: any;
    /**
     * Outputs
     */
    gridReady: EventEmitter<any>;
    columnEverythingChanged: EventEmitter<any>;
    newColumnsLoaded: EventEmitter<any>;
    columnPivotModeChanged: EventEmitter<any>;
    columnRowGroupChanged: EventEmitter<any>;
    columnPivotChanged: EventEmitter<any>;
    gridColumnsChanged: EventEmitter<any>;
    columnValueChanged: EventEmitter<any>;
    columnMoved: EventEmitter<any>;
    columnVisible: EventEmitter<any>;
    columnPinned: EventEmitter<any>;
    columnGroupOpened: EventEmitter<any>;
    columnResized: EventEmitter<any>;
    displayedColumnsChanged: EventEmitter<any>;
    virtualColumnsChanged: EventEmitter<any>;
    rowGroupOpened: EventEmitter<any>;
    rowDataChanged: EventEmitter<any>;
    floatingRowDataChanged: EventEmitter<any>;
    rangeSelectionChanged: EventEmitter<any>;
    columnRowGroupAddRequest: EventEmitter<any>;
    columnRowGroupRemoveRequest: EventEmitter<any>;
    columnPivotAddRequest: EventEmitter<any>;
    columnPivotRemoveRequest: EventEmitter<any>;
    columnValueAddRequest: EventEmitter<any>;
    columnValueRemoveRequest: EventEmitter<any>;
    columnAggFuncChangeRequest: EventEmitter<any>;
    clipboardPaste: EventEmitter<any>;
    modelUpdated: EventEmitter<any>;
    cellClicked: EventEmitter<any>;
    cellDoubleClicked: EventEmitter<any>;
    cellContextMenu: EventEmitter<any>;
    cellValueChanged: EventEmitter<any>;
    cellFocused: EventEmitter<any>;
    rowSelected: EventEmitter<any>;
    selectionChanged: EventEmitter<any>;
    beforeFilterChanged: EventEmitter<any>;
    filterChanged: EventEmitter<any>;
    afterFilterChanged: EventEmitter<any>;
    filterModified: EventEmitter<any>;
    beforeSortChanged: EventEmitter<any>;
    sortChanged: EventEmitter<any>;
    afterSortChanged: EventEmitter<any>;
    virtualRowRemoved: EventEmitter<any>;
    rowClicked: EventEmitter<any>;
    rowDoubleClicked: EventEmitter<any>;
    gridSizeChanged: EventEmitter<any>;
    viewportChanged: EventEmitter<any>;
    dragStarted: EventEmitter<any>;
    dragStopped: EventEmitter<any>;
    itemsAdded: EventEmitter<any>;
    itemsRemoved: EventEmitter<any>;
}
