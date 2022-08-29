import {
  Modal, Form, Button,
} from 'react-bootstrap';
import { useFormik } from 'formik';
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import useAPI from '../../hooks/useAPI.jsx';

function AddChannel(props) {
  const channels = useSelector((state) => state.channels);
  const { createChannel } = useAPI();
  const names = Object.values(channels.entities).map((item) => item.name);
  const { t } = useTranslation();
  const notifySuccess = () => toast.success(t('channel.created'));
  const notifyError = () => toast.error(t('channel.error'));
  const { onHide } = props;
  const f = useFormik({
    initialValues: { name: '' },
    onSubmit: (values) => {
      createChannel(values, notifySuccess, notifyError);
      onHide();
    },
    validationSchema: Yup.object().shape({
      name: Yup
        .string()
        .required(t('signup.required'))
        .trim()
        .min(3, t('signup.usernameConstraints'))
        .max(20, t('signup.usernameConstraints'))
        .notOneOf(names, t('modal.uniq')),
    }),
    validateOnBlur: false,
    validateOnChange: false,
  });
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Modal show centered>
      <Modal.Header closeButton onHide={onHide}>
        <Modal.Title>
          {t('channel.add')}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={f.handleSubmit} noValidate>
          <Form.Group>
            <Form.Label visuallyHidden="true" htmlFor="name">{t('channel.name')}</Form.Label>
            <Form.Control
              required
              ref={inputRef}
              onChange={f.handleChange}
              onBlur={f.handleBlur}
              value={f.values.name}
              name="name"
              id="name"
              className="mb-3"
              isInvalid={!!f.errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {f.errors.name}
            </Form.Control.Feedback>
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button
              variant="secondary"
              className="me-2"
              onClick={onHide}
            >
              { t('modal.cancel') }
            </Button>

            <Button type="submit" variant="primary">
              {t('modal.submit')}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

AddChannel.propTypes = {
  onHide: PropTypes.func.isRequired,
};

export default AddChannel;
