<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: claros_operations_spreadsheet_worksheet_definition.proto

namespace Claros\Operations\Spreadsheet;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>claros.operations.spreadsheet.WorksheetDefinition</code>
 */
class WorksheetDefinition extends \Google\Protobuf\Internal\Message
{
    /**
     * Version of the Worksheet definition.  This is incremented with each change
     *
     * Generated from protobuf field <code>uint32 version = 1;</code>
     */
    private $version = 0;
    /**
     * The starting row number that the configuraiton applies
     *
     * Generated from protobuf field <code>uint32 startRow = 2;</code>
     */
    private $startRow = 0;
    /**
     * The ending row number that the configuration applies
     *
     * Generated from protobuf field <code>uint32 endRow = 3;</code>
     */
    private $endRow = 0;
    /**
     * ???? Should we rename these to column definitions
     *
     * Generated from protobuf field <code>repeated .claros.operations.spreadsheet.Column columns = 4;</code>
     */
    private $columns;
    /**
     * Audit Record of who created the definition
     *
     * Generated from protobuf field <code>.claros.common.core.AuditEvent auditEvent = 99;</code>
     */
    private $auditEvent = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $version
     *           Version of the Worksheet definition.  This is incremented with each change
     *     @type int $startRow
     *           The starting row number that the configuraiton applies
     *     @type int $endRow
     *           The ending row number that the configuration applies
     *     @type \Claros\Operations\Spreadsheet\Column[]|\Google\Protobuf\Internal\RepeatedField $columns
     *           ???? Should we rename these to column definitions
     *     @type \Claros\Common\Core\AuditEvent $auditEvent
     *           Audit Record of who created the definition
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\ClarosOperationsSpreadsheetWorksheetDefinition::initOnce();
        parent::__construct($data);
    }

    /**
     * Version of the Worksheet definition.  This is incremented with each change
     *
     * Generated from protobuf field <code>uint32 version = 1;</code>
     * @return int
     */
    public function getVersion()
    {
        return $this->version;
    }

    /**
     * Version of the Worksheet definition.  This is incremented with each change
     *
     * Generated from protobuf field <code>uint32 version = 1;</code>
     * @param int $var
     * @return $this
     */
    public function setVersion($var)
    {
        GPBUtil::checkUint32($var);
        $this->version = $var;

        return $this;
    }

    /**
     * The starting row number that the configuraiton applies
     *
     * Generated from protobuf field <code>uint32 startRow = 2;</code>
     * @return int
     */
    public function getStartRow()
    {
        return $this->startRow;
    }

    /**
     * The starting row number that the configuraiton applies
     *
     * Generated from protobuf field <code>uint32 startRow = 2;</code>
     * @param int $var
     * @return $this
     */
    public function setStartRow($var)
    {
        GPBUtil::checkUint32($var);
        $this->startRow = $var;

        return $this;
    }

    /**
     * The ending row number that the configuration applies
     *
     * Generated from protobuf field <code>uint32 endRow = 3;</code>
     * @return int
     */
    public function getEndRow()
    {
        return $this->endRow;
    }

    /**
     * The ending row number that the configuration applies
     *
     * Generated from protobuf field <code>uint32 endRow = 3;</code>
     * @param int $var
     * @return $this
     */
    public function setEndRow($var)
    {
        GPBUtil::checkUint32($var);
        $this->endRow = $var;

        return $this;
    }

    /**
     * ???? Should we rename these to column definitions
     *
     * Generated from protobuf field <code>repeated .claros.operations.spreadsheet.Column columns = 4;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getColumns()
    {
        return $this->columns;
    }

    /**
     * ???? Should we rename these to column definitions
     *
     * Generated from protobuf field <code>repeated .claros.operations.spreadsheet.Column columns = 4;</code>
     * @param \Claros\Operations\Spreadsheet\Column[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setColumns($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Claros\Operations\Spreadsheet\Column::class);
        $this->columns = $arr;

        return $this;
    }

    /**
     * Audit Record of who created the definition
     *
     * Generated from protobuf field <code>.claros.common.core.AuditEvent auditEvent = 99;</code>
     * @return \Claros\Common\Core\AuditEvent
     */
    public function getAuditEvent()
    {
        return $this->auditEvent;
    }

    /**
     * Audit Record of who created the definition
     *
     * Generated from protobuf field <code>.claros.common.core.AuditEvent auditEvent = 99;</code>
     * @param \Claros\Common\Core\AuditEvent $var
     * @return $this
     */
    public function setAuditEvent($var)
    {
        GPBUtil::checkMessage($var, \Claros\Common\Core\AuditEvent::class);
        $this->auditEvent = $var;

        return $this;
    }

}

